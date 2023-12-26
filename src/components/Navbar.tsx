// import React from "react";
import { Container, Navbar as BSNav, Nav, Button} from "react-bootstrap";
// import { Home } from "../pages/Home";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <BSNav className="bg-white mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          <Nav.Link as={NavLink} to="/store">Store</Nav.Link>
        </Nav>
        <Button>
            Cart
            <div>1</div>
        </Button>
      </Container>
    </BSNav>
  );
}
