import Navigation from './Navigation';
import './shop.css';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/api/viewproducts")
            .then((response) => {
                if (response.status === 200) {
                    setProducts(response.data);
                }
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    // Filter products by category
    const refrigerators = products.filter(p => p.category?.toLowerCase() === 'refrigerator');
    const washingMachines = products.filter(p => p.category?.toLowerCase() === 'washing_machine');
    const airConditioners = products.filter(p => p.category?.toLowerCase() === 'airconditioner');
    const televisions = products.filter(p => p.category?.toLowerCase() === 'television');

    // Reusable component for product section
    const renderProductSection = (title, items) => (
        <>
            <h2 className="section-title">{title}</h2>
            <div className="row">
                {items.length === 0 ? (
                    <p>No {title.toLowerCase()} available.</p>
                ) : (
                    items.map((product, index) => (
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
                            <div className="product-card">
                                <Link to={`/buynow/${product.id}`}>
                                    <img
                                        src={`http://localhost:4000${product.image_url}`}
                                        alt={product.name}
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </Link>
                                <p>{product.name}</p>
                                <p>Rs. {parseFloat(product.price).toLocaleString("en-IN")}/-</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );

    return (
        <>
            <Navigation />
            <div className="container mt-4">
                {renderProductSection("Refrigeration", refrigerators)}
                {renderProductSection("Washing Machine", washingMachines)}
                {renderProductSection("Air Conditioner", airConditioners)}
                {renderProductSection("Television", televisions)}
            </div>
            <Footer />
        </>
    );
};

export default Shop;
