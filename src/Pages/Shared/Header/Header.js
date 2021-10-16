import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../img/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img style={{ height: "70px" }} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">
                <i className="fas fa-shopping-cart"></i>
              </Nav.Link>
              <Nav.Link className="px-4" href="#features">
                Login
              </Nav.Link>
              <Nav.Link href="#pricing">
                <Button className="btn-danger rounded-btn">Sign up</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
<h1>header</h1>;
