import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import logo from './img/vr_logo.jpg';
import './About';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#003366', color: 'white', padding: '20px 0', textAlign: 'center', fontSize: '0.9rem' }}>
            <div className="container">
                <div className='row'>
                    <div className='col-lg-4' style={{textAlign: 'left'}}>
                        <div> <img
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top me-2 rounded-circle mb-2"
                            alt="Vishwakarma Refrigeration logo" />
                            <span className="fw-bold fs-5 text-light">Vishwakarma Refrigeration</span></div>
                    </div>
                    <div className='col-lg-4' style={{textAlign: 'left'}}>
                        <h4><a href='About' style={{ color: 'white',textDecoration: 'none' }}>About Us</a></h4>
                        <p>Our Store</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className='col-lg-4'  style={{textAlign: 'left'}}>
                        <h4>Contact Us</h4>
                        <p>70 Washington Square South, New York, NY 10012, United State</p>
                        <p>Email: vishwakarma.repair@gmail.com</p>
                        <p className="lead mt-2">Call: +91 98765 43210</p>
                    </div>
                </div>

                <div className="mt-3" style={{ color: 'yellow' }}>
                    &copy; 2025 Vishwakarma Refrigeration. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
