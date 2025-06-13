import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Navigation from './Navigation';

const BuyNow = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [userId, setUserId] = useState(null); // Assume from session/localStorage

    // useEffect(() => {
    //     if (id) {
    //         axios.get(`http://localhost:4000/api/getsingleproduct/${id}`)
    //             .then((res) => setProduct(res.data))
    //             .catch((err) => console.error("Error fetching product details:", err));
    //     }
    // }, [id]);

    // useEffect(() => {
    //     // 👇 Load product info
    //     if (id) {
    //         axios.get(`http://localhost:4000/api/getsingleproduct/${id}`)
    //             .then((res) => setProduct(res.data))
    //             .catch((err) => console.error("Error fetching product:", err));
    //     }

    //     // 👇 Get logged-in user from localStorage
    //     const user = JSON.parse(localStorage.getItem("user"));
    //     if (user && user.id) {
    //         setUserId(user.id);
    //     }
    // }, [id]);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:4000/api/getsingleproduct/${id}`)
                .then((res) => {
                    console.log("Product API response:", res.data); // 👈 Check this
                    setProduct(res.data);
                })
                .catch((err) => console.error("Error fetching product:", err));
        }

        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.id) {
            setUserId(user.id);
        }
    }, [id]);

    const handlePayment = async () => {
    if (!userId || !product) {
        alert("User not logged in or product not loaded.");
        return;
    }

    const total_price = parseFloat(product.price) * quantity;

    console.log({
        product_id: product.product_id || product.id,
        user_id: userId,
        quantity,
        total_price,
        purchase_date: new Date()
    });

    try {
        const response = await axios.post("http://localhost:4000/api/addpurchase", {
            product_id: product.product_id || product.id,
            user_id: userId,
            quantity: quantity,
            total_price: total_price,
            purchase_date: new Date(),
            amount: total_price * 100, // Razorpay in paise
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
            notes: {
                productName: product.name,
                customerId: userId
            }
        });

        const { razorpay_order, purchase_id } = response.data;

        const options = {
            key: "rzp_test_fiIwmRET6CApc2",
            amount: razorpay_order.amount,
            currency: razorpay_order.currency,
            name: "Electronics Shop",
            description: product.name,
            order_id: razorpay_order.id,
            handler: async function (response) {
                await axios.post("http://localhost:4000/api/update-payment-status", {
                    purchase_id,
                    payment_status: "Paid"
                });
                alert("✅ Payment successful!");
            },
            prefill: {
                name: "Customer",
                email: "customer@example.com",
                contact: "9999999999"
            },
            theme: {
                color: "#0f4c81"
            }
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
    } catch (error) {
        console.error("Payment error:", error.response?.data || error.message);
        alert("❌ Something went wrong with the payment.");
    }
};

    // const handlePayment = async () => {
    //     // if (!userId || !product) {
    //     //     alert("User not logged in or product not loaded.");
    //     //     return;
    //     // }

    //     const total_price = parseFloat(product.price) * quantity;

    //     console.log({
    //         product_id: product.product_id || product.id,
    //         user_id: userId,
    //         quantity,
    //         total_price,
    //         purchase_date: new Date()
    //     });

    //     try {
    //         // 1. Send purchase request to backend
    //         const response = await axios.post("http://localhost:4000/api/addpurchase", {
    //             // product_id: product.id,
    //             // product_id: product.product_id,
    //             product_id: product.product_id || product.id,
    //             user_id: userId,
    //             quantity: quantity,
    //             total_price: total_price,
    //             purchase_date: new Date(),
    //             amount: total_price * 100, // Razorpay needs paise
    //             currency: "INR",
    //             receipt: `receipt_${Date.now()}`,
    //             notes: {
    //                 productName: product.name,
    //                 customerId: userId
    //             }
    //         });

    //         const { razorpay_order, purchase_id } = response.data;

    //         // 2. Razorpay config
    //         const options = {
    //             key: "rzp_test_fiIwmRET6CApc2",
    //             amount: razorpay_order.amount,
    //             currency: razorpay_order.currency,
    //             name: "Electronics Shop",
    //             description: product.name,
    //             order_id: razorpay_order.id,
    //             handler: async function (response) {
    //                 // 3. Payment success callback
    //                 await axios.post("http://localhost:4000/api/update-payment-status", {
    //                     purchase_id,
    //                     payment_status: "Paid"
    //                 });
    //                 alert("✅ Payment successful!");
    //             },
    //             prefill: {
    //                 name: "Customer",
    //                 email: "customer@example.com",
    //                 contact: "9999999999"
    //             },
    //             theme: {
    //                 color: "#0f4c81"
    //             }
    //         };

    //         const razorpay = new window.Razorpay(options);
    //         razorpay.open();
    //     } catch (error) {
    //         console.error("Payment error:", error);
    //         alert("Something went wrong with the payment.");
    //     }
    // };

    const handleIncrease = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) setQuantity(prev => prev - 1);
    };

    if (!product) {
        return <p className="text-center text-muted mt-5">Loading product details...</p>;
    }

    const totalPrice = parseFloat(product.price) * quantity;

    return (
        <>
            <Navigation />
            <div className="container mt-5">
                <div className="row justify-content-center align-items-center bg-white rounded-4 shadow-lg p-4">
                    {/* Product Image */}
                    <div className="col-md-6 text-center mb-4 mb-md-0">
                        <img
                            src={`http://localhost:4000${product.image_url}`}
                            alt={product.name}
                            className="img-fluid rounded-3 shadow"
                            style={{ height: '500px', width: '400px' }}
                        />
                    </div>

                    {/* Product Details */}
                    <div className="col-md-6">
                        <h2 className="fw-bold mb-3">{product.name}</h2>
                        <h4>Description:</h4>
                        <p className="text-secondary">{product.description}</p>
                        <h4 className="text-success mb-3">
                            Price: Rs. {parseFloat(product.price).toLocaleString("en-IN")}/-
                        </h4>

                        {/* Quantity Controls */}
                        <div className="d-flex align-items-center mb-3">
                            <span className="me-3 fw-medium">Quantity:</span>
                            <Button variant="outline-secondary" onClick={handleDecrease}>-</Button>
                            <span className="mx-3 fs-5">{quantity}</span>
                            <Button variant="outline-secondary" onClick={handleIncrease}>+</Button>
                        </div>

                        {/* Total Price */}
                        <h5 className="fw-bold text-primary mb-4">
                            Total: Rs. {totalPrice.toLocaleString("en-IN")}/-
                        </h5>

                        {/* Action Buttons */}
                        <div className="d-flex gap-3">
                            <Button variant="danger" size="lg" onClick={() => alert("Added to cart!")}>
                                🛒 Add to Cart
                            </Button>
                            <Button variant="warning" size="lg" onClick={handlePayment}>
                                ⚡ Buy Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuyNow;
