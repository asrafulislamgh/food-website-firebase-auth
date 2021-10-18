import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import DinnerSingle from "./DinnerSingle";

const Dinner = () => {
  const [dinner, setDinner] = useState([]);
  useEffect(() => {
    fetch("./dinner.json")
      .then((res) => res.json())
      .then((data) => setDinner(data));
  }, []);
  return (
    <div className="container">
      <Row xs={1} md={2} lg={3} className="g-4">
        {dinner.map((food) => (
          <DinnerSingle key={food.name} food={food}></DinnerSingle>
        ))}
      </Row>
    </div>
  );
};

export default Dinner;
