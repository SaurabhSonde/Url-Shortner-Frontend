import React from "react";
import "./style.css";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navigation">
      <Navbar.Brand>
        <a className="logo" href="google.com">
          Short<span>.ly</span>
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="primary-nav mr-auto">
          <a href="google.com">Home</a>
          <a href="/">Features</a>
        </Nav>
        <Nav className="contact">
          <a href="google.com">Contact</a>
        </Nav>
        <Nav className="secondary-nav">
          <a href="google.com">Go Premium</a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
