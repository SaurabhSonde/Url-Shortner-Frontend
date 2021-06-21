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
          <a href="/">Home</a>
        </Nav>
        <Nav className="secondary-nav">
          <a href="/">Go Premium</a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
