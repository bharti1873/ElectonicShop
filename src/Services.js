import React from 'react';
import Naigation from './Navigation';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import fridge from './img/fridge.png';
import ac1 from './img/ac1.png';
import wm from './img/wm1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

const Services = () => {
    return (
        <>
            <Naigation />

            {/* Services Section */}
            <section className="py-5 mt-5" style={{ backgroundColor: '#f8f9fa' }}>
                <Container>
                    <h2 className="text-center mb-5 fw-bold" style={{ color: '#333' }}>Our Repairing Services</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <Card className="h-100 shadow-sm border-0 text-center">
                                <Card.Img variant="top" src={ac1} style={{ height: '220px', objectFit: 'contain', padding: '20px' }} />
                                <Card.Body>
                                    <Card.Title>AC Repairing</Card.Title>
                                    <Card.Text>
                                        Fast & reliable air conditioning repair services for all brands and models.
                                    </Card.Text>
                                    <Button variant="warning" className="text-white">Book Service</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="h-100 shadow-sm border-0 text-center">
                                <Card.Img variant="top" src={wm} style={{ height: '220px', objectFit: 'contain', padding: '20px' }} />
                                <Card.Body>
                                    <Card.Title>Washing Machine Repair</Card.Title>
                                    <Card.Text>
                                        Expert repair for fully-automatic and semi-automatic washing machines.
                                    </Card.Text>
                                    <Button variant="warning" className="text-white">Book Service</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="h-100 shadow-sm border-0 text-center">
                                <Card.Img variant="top" src={fridge} style={{ height: '220px', objectFit: 'contain', padding: '20px' }} />
                                <Card.Body>
                                    <Card.Title>Fridge Repairing</Card.Title>
                                    <Card.Text>
                                        Doorstep service for all types of refrigerators – single, double, side-by-side.
                                    </Card.Text>
                                    <Button variant="warning" className="text-white">Book Service</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </>
    );
};

export default Services;
