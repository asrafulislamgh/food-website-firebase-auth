import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../img/logo.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img style={{ height: "70px" }} src={logo} alt="" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                <i className="fas fa-shopping-cart"></i>
              </Nav.Link>

              <Nav.Link className="px-4">
                {user.email ? (
                  <p onClick={logOut}>Logout</p>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </Nav.Link>
              <Nav.Link>
                {user.email && (
                  <div>
                    <img
                      style={{
                        height: "40px",
                        borderRadius: "50%",
                        border: "1px solid gray",
                      }}
                      src={user.photoURL}
                      alt=""
                    />
                  </div>
                )}
              </Nav.Link>
              <Nav.Link>
                {user.email ? (
                  user.displayName
                ) : (
                  <Button className="btn btn-danger rounded-btn">
                    <Link to="/login">Sign up</Link>
                  </Button>
                )}
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
