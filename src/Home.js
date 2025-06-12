import React, { useEffect, useState } from "react";

import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Carousel,
  Row,
  Col,
} from 'react-bootstrap';
import fridge from './img/fridge.png';
import newtv from './img/image.png';
import ac1 from './img/ac1.png';
import wm from './img/wm.png';
import Navigation from './Navigation';
import Footer from './Footer';


const Home = () => {

 const [username, setUsername] = useState("");

  // useEffect(() => {
  //   const storedUsername = localStorage.getItem("username");
  //   if (storedUsername) {
  //     setUsername(storedUsername);
  //   }
  // }, []);

  return (
    <>
      <Navigation />
      {/* <h5 className="card-title mb-0">{username}</h5> */}

      {/* Banner */}
      <div className="bg-warning text-dark py-5">
        <Container>
          <Row className="align-items-center text-center text-md-start">
            <Col md={8}>
              <h2 className="fw-bold">🎉 First Time Shopping?</h2>
              <p className="mb-3 fs-5">
                Enjoy <strong>15% OFF</strong> on your first electronics purchase! Grab
                the best deals on TVs, ACs, Fridges, and more.
              </p>
            </Col>
            <Col md={4} className="text-md-end">
              <Button variant="dark" size="lg">
                Shop Now
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Shop by Category */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center text-dark fw-bold mb-5">Shop by Category</h2>

          <Row className="justify-content-center text-center g-4">
            {/* Refrigerator */}
            <Col xs={6} md={3}>
              <a href="/Shop" className="text-decoration-none text-dark">
                <img
                  src={fridge}
                  alt="Refrigerator"
                  className="img-fluid rounded-circle mb-2 shadow"
                  style={{
                    height: '150px',
                    width: '150px',
                    objectFit: 'cover',
                    backgroundColor: '#f8f9fa',
                  }}
                />
                <p className="fw-semibold">Refrigerator</p>
              </a>
            </Col>

            {/* Air Conditioner */}
            <Col xs={6} md={3}>
              <a href="/Shop" className="text-decoration-none text-dark">
                <img
                  src={ac1}
                  alt="Air Conditioner"
                  className="img-fluid rounded-circle mb-2 shadow"
                  style={{
                    height: '150px',
                    width: '150px',
                    objectFit: 'cover',
                    backgroundColor: '#f8f9fa',
                  }}
                />
                <p className="fw-semibold">Air Conditioner</p>
              </a>
            </Col>

            {/* Washing Machine */}
            <Col xs={6} md={3}>
              <a href="/Shop" className="text-decoration-none text-dark">
                <img
                  src={wm}
                  alt="Washing Machine"
                  className="img-fluid rounded-circle mb-2 shadow"
                  style={{
                    height: '150px',
                    width: '150px',
                    objectFit: 'cover',
                    backgroundColor: '#f8f9fa',
                  }}
                />
                <p className="fw-semibold">Washing Machine</p>
              </a>
            </Col>

            {/* Television */}
            <Col xs={6} md={3}>
              <a href="/Shop" className="text-decoration-none text-dark">
                <img
                  src={newtv}
                  alt="Television"
                  className="img-fluid rounded-circle mb-2 shadow"
                  style={{
                    height: '150px',
                    width: '150px',
                    objectFit: 'cover',
                    backgroundColor: '#f8f9fa',
                  }}
                />
                <p className="fw-semibold">Television</p>
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Home;
