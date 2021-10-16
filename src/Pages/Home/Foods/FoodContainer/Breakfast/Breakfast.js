import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import BreakFastFood from "../../../../Shared/Header/BreakfastFood/BreakFastFood";

const Breakfast = () => {
  const [breakfast, setBreakfast] = useState([]);
  useEffect(() => {
    fetch("./breakfast.json")
      .then((res) => res.json())
      .then((data) => setBreakfast(data));
  }, []);
  console.log(breakfast);
  return (
    <div className="container">
      <Row xs={1} md={2} lg={3} className="g-4">
        {breakfast.map((food) => (
          <BreakFastFood food={food}></BreakFastFood>
        ))}
      </Row>
    </div>
  );
};

export default Breakfast;
