import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import HeroImg from "./images/HeroImg.svg";

const HeroSection = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={12} className="hero text-center">
            <p>It's Short &amp; Simple</p>
            <h1>Big World,Short Links</h1>
          </Col>
          <Col md={12} className="HeroImg text-center">
            <img src={HeroImg} alt="Hero Img" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeroSection;
