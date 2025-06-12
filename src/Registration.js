
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Navigation from './Navigation';
import React, { useState, useRef } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Registration = () => {

    const nameRef = useRef();
    const addressRef = useRef();
    const contactRef = useRef();
    const radioRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const imageRef = useRef();
    const pincodeRef = useRef();
    const [gender, setGender] = useState("");

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    }

    const nav = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        const name_val = nameRef.current.value;
        const address_val = addressRef.current.value;
        const contact_val = contactRef.current.value;
        const email_val = emailRef.current.value;
        const password_val = passwordRef.current.value;
        const pincode_val = pincodeRef.current.value;
        const image_val = imageRef.current.files[0];
        const gender_val = gender;

        const formData = new FormData();
        formData.append("name", name_val);
        alert(name_val);
        formData.append("address", address_val);
        alert(address_val);
        formData.append("contact", contact_val);
        alert(contact_val);
        formData.append("gender", gender_val);
        alert(gender_val);
        formData.append("email", email_val);
        alert(email_val);
        formData.append("password", password_val);
        alert(password_val);
        formData.append("pincode", pincode_val);
        alert(pincode_val);
        formData.append("img_url", image_val);
        alert(image_val.name);

        axios.post("http://localhost:4000/api/addcustomers", formData).then((Response) => {
            if (Response.status == 200) {
                alert("Data Inserted SuccessFully");
            }
        });

        nav('/LogIn');
    }

    return (
        <>
            <Navigation />
            <div className="container mt-5">
                <h2 className="mb-4 text-center">User Registration</h2>

                <Form className="border p-4 shadow rounded bg-light">
                    {/* Full Name */}
                    <Form.Group as={Row} className="mb-3" controlId="formFullName">
                        <Form.Label column sm="2">
                            Full Name:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Enter Full Name" ref={nameRef} />
                        </Col>
                    </Form.Group>

                    {/* Email */}
                    <Form.Group as={Row} className="mb-3" controlId="formEmail">
                        <Form.Label column sm="2">
                            Email:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="email" placeholder="Enter Email ID" ref={emailRef} />
                        </Col>
                    </Form.Group>

                    {/* Password */}
                    <Form.Group as={Row} className="mb-3" controlId="formEmail">
                        <Form.Label column sm="2">
                            Password:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Enter PAssword" ref={passwordRef} />
                        </Col>
                    </Form.Group>

                    {/* Contact */}
                    <Form.Group as={Row} className="mb-3" controlId="formContact">
                        <Form.Label column sm="2">
                            Contact:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="number" placeholder="Enter Contact Number" ref={contactRef} />
                        </Col>
                    </Form.Group>

                    {/* Profile Photo */}
                    <Form.Group as={Row} className="mb-3" controlId="formPhoto">
                        <Form.Label column sm="2">
                            Profile Photo:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="file" ref={imageRef} />
                        </Col>
                    </Form.Group>

                    {/* Gender */}
                    <Form.Group as={Row} className="mb-3" controlId="formGender" ref={radioRef}>
                        <Form.Label column sm="2">
                            Gender:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Check
                                inline
                                label="Male"
                                name="gender"
                                type="radio"
                                id="gender-male"
                                value="Male"
                                onChange={handleGenderChange}
                            />
                            <Form.Check
                                inline
                                label="Female"
                                name="gender"
                                type="radio"
                                id="gender-female"
                                value="Female"
                                onChange={handleGenderChange}
                            />
                            <Form.Check
                                inline
                                label="Other"
                                name="gender"
                                type="radio"
                                id="gender-other"
                                value="Other"
                            />
                        </Col>
                    </Form.Group>

                    {/* Address */}
                    <Form.Group as={Row} className="mb-3" controlId="formAddress">
                        <Form.Label column sm="2">
                            Address:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control as="textarea" rows={2} placeholder="Enter Address" ref={addressRef} />
                        </Col>
                    </Form.Group>

                    {/* Pincode */}
                    <Form.Group as={Row} className="mb-4" controlId="formPincode">
                        <Form.Label column sm="2">
                            Pincode:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="number" placeholder="Enter Pincode" ref={pincodeRef} />
                        </Col>
                    </Form.Group>

                    {/* Submit Button */}
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 1 }} className="text-center">
                            <Button type="submit" variant="primary" onClick={handleSubmit}>
                                Register
                            </Button>
                        </Col>
                    </Form.Group>

                </Form>
            </div>
        </>
    );
};

export default Registration;
