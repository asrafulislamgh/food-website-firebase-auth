import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import LunchSingle from "./LunchSingle";

const Lunch = () => {
  const [lunch, setLunch] = useState([]);
  useEffect(() => {
    fetch("./lunch.json")
      .then((res) => res.json())
      .then((data) => setLunch(data));
  }, []);
  return (
    <div className="container">
      <Row xs={1} md={2} lg={3} className="g-4">
        {lunch.map((food) => (
          <LunchSingle food={food}></LunchSingle>
        ))}
      </Row>
    </div>
  );
};

export default Lunch;
