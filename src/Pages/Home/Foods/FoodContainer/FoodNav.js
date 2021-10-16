import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Breakfast from "./Breakfast/Breakfast";
import Dinner from "./Dinner/Dinner";
import "./FoodNav.css";
import Lunch from "./Lunch/Lunch";

const FoodNav = () => {
  return (
    <div className="container">
      {/* <div>
        <nva>
          <ul className="d-flex list-unstyled mt-5 mb-3 justify-content-center">
            <NavLink activeStyle={{ color: "red" }} to="/breakfast">
              <li className="px-4">Breakfast</li>
            </NavLink>
            <li className="px-4">Lunch</li>
            <li className="px-4">Dinner</li>
          </ul>
        </nva>
      </div> */}
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3 justify-content-center my-5"
      >
        <Tab eventKey="home" title="Breakfast">
          <Breakfast></Breakfast>
        </Tab>
        <Tab eventKey="contact" title="Lunch">
          <Lunch></Lunch>
        </Tab>
        <Tab eventKey="profile" title="Dinner">
          <Dinner></Dinner>
        </Tab>
      </Tabs>
    </div>
  );
};

export default FoodNav;
