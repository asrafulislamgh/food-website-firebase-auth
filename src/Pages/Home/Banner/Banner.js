import React from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import banner from "../../../img/bannerbackground.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="position-relative">
      <img className="img-fluid mx-auto d-block" src={banner} alt="" />
      <div className="centered">
        <h1 className="display-lg-5 text-center fw-bold">
          The best foods are waiting for you!
        </h1>
        <InputGroup className="mt-5 ">
          <FormControl
            className="rounded"
            placeholder="Search your foods"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button className="rounded bg-danger px-4" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Banner;
