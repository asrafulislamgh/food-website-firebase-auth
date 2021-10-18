import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const BreakFastFood = ({ food }) => {
  const { name, info, price, img } = food;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body className="text-center">
            <Card.Title>{name}</Card.Title>
            <Card.Text>{info}</Card.Text>
            <Card.Text>
              <b className="h4">${price}</b>
            </Card.Text>
            <Button className="rounded-btn btn-danger">Detail</Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default BreakFastFood;
