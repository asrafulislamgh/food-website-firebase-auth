import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import "./WhyUs.css";
import img1 from "../../../img/1.png";
import img2 from "../../../img/2.png";
import img3 from "../../../img/3.png";

const WhyUs = () => {
  return (
    <div className="container my-5">
      <div className="mt-5">
        <h2>Why choose us?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In magnam rem
          dicta consectetur recusandae sunt eligendi reprehenderit quae
          praesentium rerum.
        </p>
      </div>
      <div>
        <Row xs={1} md={2} lg={3} className="g-4 my-3">
          <Col>
            <Card border="light" className="position-relative cardHover">
              <Card.Img variant="top" src={img1} />
              <div className="d-flex align-items-center">
                <div
                  style={{ height: "50px", width: "50px" }}
                  className="bg-danger position-relative rounded-circle ms-3"
                >
                  <i className="fas fa-truck p-3 text-white"></i>
                </div>
                <Card.Body>
                  <Card.Title>Fast Delivery</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <Button variant="link">
                    Read More
                    <i class="fas fa-arrow-circle-right ms-2"></i>
                  </Button>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col>
            <Card border="light" className="position-relative cardHover">
              <Card.Img variant="top" src={img2} />
              <div className="d-flex align-items-center">
                <div
                  style={{ height: "50px", width: "50px" }}
                  className="bg-danger position-relative rounded-circle ms-3"
                >
                  <i class="fas fa-carrot p-3 text-white"></i>
                </div>
                <Card.Body>
                  <Card.Title>Fruits Salad</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <Button variant="link">
                    Read More
                    <i class="fas fa-arrow-circle-right ms-2"></i>
                  </Button>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col>
            <Card border="light" className="position-relative cardHover">
              <Card.Img variant="top" src={img3} />
              <div className="d-flex align-items-center">
                <div
                  style={{ height: "50px", width: "50px" }}
                  className="bg-danger position-relative rounded-circle ms-3"
                >
                  <i class="fas fa-seedling text-white p-3"></i>
                </div>
                <Card.Body>
                  <Card.Title>Vegitable Salad</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <Button variant="link">
                    Read More
                    <i class="fas fa-arrow-circle-right ms-2"></i>
                  </Button>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WhyUs;
