import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../img/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/home">
              <img style={{ height: "70px" }} src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">
                <i className="fas fa-shopping-cart"></i>
              </Nav.Link>
              <Nav.Link className="px-4">
                <Link to="/login">Login</Link>
              </Nav.Link>
              <Nav.Link>
                <Button className="btn btn-danger rounded-btn">
                  <Link to="/login">Sign up</Link>
                </Button>
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
