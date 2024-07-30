import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export default function NavBarPanel() {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Myntoora</Navbar.Brand>

        <Nav>
          <Nav.Link to="/" as={Link}>
            Products
          </Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Nav.Link to="/cart" as={Link}>
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{ marginRight: "5px" }}
              />
              {cartProducts.length}
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
