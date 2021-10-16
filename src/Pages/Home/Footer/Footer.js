import React from "react";
import logo from "../../../img/logo.png";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-dark py-5 text-secondary">
      <Container>
        <Row className="d-flex align-items-center">
          <Col lg={6}>
            <img style={{ height: "150px" }} src={logo} alt="" />
          </Col>
          <Col lg={3}>
            <ul className="list-unstyled lh-lg">
              <li>Lorem, ipsum.</li>
              <li>Sed, dolor!</li>
              <li>Magni, amet?</li>
              <li>Ratione, nemo.</li>
            </ul>
          </Col>
          <Col lg={3}>
            <ul className="list-unstyled lh-lg">
              <li>Lorem, ipsum.</li>
              <li>Sed, dolor!</li>
              <li>Magni, amet?</li>
              <li>Ratione, nemo.</li>
            </ul>{" "}
          </Col>
        </Row>
        <Row className="d-flex align-items-center mt-5 text-center">
          <Col lg={3}>
            <h6>Copyright 2021</h6>
          </Col>
          <Col lg={3}>
            <p>Privacy policy</p>
          </Col>
          <Col lg={3}>
            <p>Terms of usages</p>
          </Col>
          <Col lg={3}>
            <p>Pricing</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
