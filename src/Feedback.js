import './feedback.css';
import { Fragment, useRef, useState } from "react";
import Navigation from './Navigation';
import Footer from './Footer';

const Feedback = () => {

    const [rateServices, setrateServices] = useState();

    const handleChange = (e) => {
        setrateServices(e.target.value);
    };

    return (
        <>
            <Navigation />
            <h1 style={{ textAlign: 'center', marginTop: '15px' }}>Give Your Feedback here</h1>
            <Fragment>
                <div className="feedback-container">
                    <h2 className="feedback-title">Feedback Form</h2>

                    {/* {submitted && (
          <div className="feedback-success">Thank you for your feedback!</div>
        )} */}

                    <form className="feedback-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>Your Name</label>
                                <input type="text" name="name" placeholder="Enter your name" required />
                            </div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" name="email" placeholder="Enter email" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Rate our service</label>
                            <select name="rating" value={rateServices}>
                                <option value="">Please Select Rate</option>
                                <option value="Excellent">Excellent</option>
                                <option value="Very Good">Very Good</option>
                                <option value="Good">Good</option>
                                <option value="Fair">Fair</option>
                                <option value="Poor">Poor</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Additional Comments</label>
                            <textarea rows={4} name="comments" placeholder="Write your feedback here..." />
                        </div>

                        <div className="submit-btn-wrapper">
                            <button type="submit" className="submit-btn">
                                Submit Feedback
                            </button>
                        </div>
                    </form>
                </div>
            </Fragment>

            <Footer />
        </>
    )
}

export default Feedback;