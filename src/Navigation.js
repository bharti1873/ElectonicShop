import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Form, Button, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import logo from './img/vr_logo.jpg';

const Navigation = () => {
  const [email, setUsername] = useState(""); // ✅ this is critical

  useEffect(() => {
    const storedUsername = localStorage.getItem("email");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top" className="shadow-sm py-3">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center text-dark">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top me-2 rounded-circle"
            alt="Logo"
          />
          <span className="fw-bold fs-5">Vishwakarma Refrigeration</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto d-flex gap-3">
            {['/home', '/shop', '/services', '/feedback'].map((path, index) => {
              const labels = ['Home', 'Shop', 'Services', 'Feedback'];
              return (
                <Nav.Link
                  key={index}
                  as={NavLink}
                  to={path}
                  style={({ isActive }) => ({
                    color: isActive ? 'orange' : 'black',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                  })}
                >
                  {labels[index]}
                </Nav.Link>
              );
            })}
          </Nav>

          <Form className="d-flex me-3">
            <Form.Control type="search" placeholder="Search products" className="me-2" />
            <Button variant="outline-dark">Search</Button>
          </Form>

          <div className="d-flex align-items-center gap-3">
            <Nav.Link href="/Cart" className="text-dark">
              <FaShoppingCart size={22} />
            </Nav.Link>

            <NavDropdown
              title={<FaUserCircle size={22} className="text-dark" />}
              id="account-dropdown"
              align="end"
            >
              <NavDropdown.Item href="/Registration">Register</NavDropdown.Item>
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/delete-account" className="text-danger">
                Delete Account
              </NavDropdown.Item>
            </NavDropdown>

            <h5 className="card-title mb-0">{email}</h5>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
