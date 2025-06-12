import Navigation from './Navigation';
import Footer from './Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaTools, FaBolt, FaSmile, FaStore } from 'react-icons/fa';

const About = () => {
    return (
        <>
            <Navigation />

            <div style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
                <Container>
                    <h1 className="text-center mb-4">About Us</h1>
                    <p className="text-center text-muted mb-5">
                        Trusted Electronics Sales & Service – Since 2005
                    </p>

                    <Row className="mb-5">
                        <Col md={6}>
                            <h4>Who We Are</h4>
                            <p>
                                <strong>Vishwakarma Refrigeration</strong> is a leading electronics retail and service company,
                                offering a wide range of appliances like refrigerators, air conditioners, washing machines,
                                and televisions. With a commitment to quality and customer satisfaction, we’ve been serving homes and businesses for over 15 years.
                            </p>
                        </Col>
                        <Col md={6}>
                            <h4>Our Mission</h4>
                            <p>
                                To deliver high-performance appliances and reliable support services at affordable prices.
                                We believe in long-term customer relationships built on trust, quality, and honest service.
                            </p>
                        </Col>
                    </Row>

                    <h3 className="text-center mb-4">What We Offer</h3>
                    <Row className="text-center">
                        <Col md={3} sm={6} className="mb-4">
                            <Card className="h-100 shadow-sm border-0">
                                <Card.Body>
                                    <FaStore size={40} className="mb-3 text-primary" />
                                    <Card.Title>Wide Range</Card.Title>
                                    <Card.Text>
                                        Top brands of Refrigerators, ACs, TVs & Washing Machines.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3} sm={6} className="mb-4">
                            <Card className="h-100 shadow-sm border-0">
                                <Card.Body>
                                    <FaTools size={40} className="mb-3 text-success" />
                                    <Card.Title>Installation</Card.Title>
                                    <Card.Text>
                                        Professional installation and home delivery services.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3} sm={6} className="mb-4">
                            <Card className="h-100 shadow-sm border-0">
                                <Card.Body>
                                    <FaBolt size={40} className="mb-3 text-warning" />
                                    <Card.Title>Repairs</Card.Title>
                                    <Card.Text>
                                        On-site and in-store repair services by expert technicians.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3} sm={6} className="mb-4">
                            <Card className="h-100 shadow-sm border-0">
                                <Card.Body>
                                    <FaSmile size={40} className="mb-3 text-danger" />
                                    <Card.Title>Support</Card.Title>
                                    <Card.Text>
                                        Friendly support with warranty and after-sales service.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </>
    );
};

export default About;
