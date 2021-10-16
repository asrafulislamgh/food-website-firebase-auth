import React from "react";
import { Col, Container, FormControl, Row, Button } from "react-bootstrap";
import useFirebase from "../../../hooks/useFirebase";
import logo from "../../../img/logo.png";
import "./Login.css";

const Login = () => {
  const { handleGoogleSignin } = useFirebase();
  // const googleSignin = handleGoogleSignin();
  console.log(handleGoogleSignin);

  return (
    <div>
      <Container className="justify-content-center my-5">
        <Row className="d-flex justify-content-center text-center">
          <Col xl={4} md={5} sm={8}>
            <img
              className="d-block mx-auto my-3"
              style={{ height: "100px" }}
              src={logo}
              alt=""
            />
            <FormControl
              className="input-field mb-3"
              placeholder="Name"
              aria-label="name"
              aria-describedby="basic-addon2"
            />
            <FormControl
              className="input-field mb-3"
              placeholder="Email"
              aria-label="email"
              aria-describedby="basic-addon2"
            />
            <FormControl
              className="input-field mb-3"
              placeholder="Password"
              aria-label="password"
              aria-describedby="basic-addon2"
            />
            <FormControl
              className="input-field mb-3"
              placeholder="Confirm Password"
              aria-label="password"
              aria-describedby="basic-addon2"
            />
            <div className="d-grid">
              <Button className="btn btn-danger py-3">Login</Button>
            </div>
            <div className="py-2">Or</div>

            <div className="d-flex justify-content-between">
              <Button
                onClick={handleGoogleSignin}
                className="btn btn-primary py-3"
              >
                Google
              </Button>
              <Button className="btn btn-dark text-white py-3">Github</Button>
              <Button className="btn btn-primary py-3">Facebook</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
