import React from "react";
import "./FeaturesSection.css";
import { Container, Row, Col } from "react-bootstrap";
import link from "./Images/link.svg";
import sharelinks from "./Images/sharelinks.svg";
import privacy from "./Images/privacy.svg";

const FeaturesSection = () => {
  return (
    <div>
      <Container className="featureSection">
        <h1>The fast secure link shortner to short your big links</h1>
        <p className="tagline">
          Short and share your big links of Google Form,Microsoft Teams,etc with
          one click.
        </p>
        <Row>
          <Col sm={12} md={4}>
            <div className="features">
              <a href="https://storyset.com/online">
                <img src={link} alt="couldn't load" />
              </a>
              <h2>Free short links</h2>
              <p>
                Tired of the big links?You can short it for free.Short your big
                links of Google Forms,Microsoft Teams or Amazon or Flipkart
                products on just one click.
              </p>
            </div>
          </Col>
          <Col sm={12} md={4} className="features">
            <div>
              <a href="https://storyset.com/online">
                <img src={sharelinks} alt="couldn't load" />
              </a>
              <h2>Share links</h2>
              <p>
                Hassle free share option to share your short links on any social
                media platform you want.Just click on share button and share it
                where ever you want.
              </p>
            </div>
          </Col>
          <Col sm={12} md={4} className="features">
            <div>
              <a href="https://storyset.com/online">
                <img src={privacy} alt="couldn't load" />
              </a>
              <h2>Privacy</h2>
              <p>
                Your data is safe with us.We take privacy as right of user.We
                are commited to protect your privacy we will never share your
                links with anyone.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturesSection;
