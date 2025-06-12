import React, { useRef } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Navigation from './Navigation';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

const LogIn = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const nav = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        axios.post("http://localhost:4000/api/login", {
            email,
            password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.data.status === "true") {

                // localStorage.setItem("email", email);
                // alert("Welcome "+email);

                alert("Login Successful");
                nav('/Home');
            } else {
                alert("Invalid credentials");
            }
        }).catch((err) => {
            console.error(err);
            alert("Login error");
        });
    };


    return (
        <>
            <Navigation />
            <div className="container mt-5">
                <h2 className="mb-4 text-center">Log In</h2>

                <Form className="border p-4 shadow rounded bg-light">

                    {/* Email */}
                    <Form.Group as={Row} className="mb-3" controlId="formEmail">
                        <Form.Label column sm="2">
                            Email:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="email" placeholder="Enter Email ID" ref={emailRef} />
                        </Col>
                    </Form.Group>

                    {/* Contact */}
                    <Form.Group as={Row} className="mb-3" controlId="formContact">
                        <Form.Label column sm="2">
                            Password:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Enter Password" ref={passwordRef} />
                        </Col>
                    </Form.Group>

                    {/* Submit Button */}
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 1 }} className="text-center">
                            <Button type="submit" variant="primary" onClick={handlesubmit}>
                                SignIn
                            </Button>
                        </Col>
                    </Form.Group>

                </Form>
            </div>
        </>
    );
};

export default LogIn;
