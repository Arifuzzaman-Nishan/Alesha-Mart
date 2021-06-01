import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./NavigationBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  return (
    <div className="sticky">
      <Navbar className="nav-border" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">support@aleshamart.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="ml-2 " href="#home">
                Download App
              </Nav.Link>
              <Nav.Link className="ml-2" href="#link">
                Merchant Zone
              </Nav.Link>
              <Nav.Link className="ml-2" href="#link">
                Become A Member
              </Nav.Link>
              <Nav.Link className="ml-2" href="#link">
                Upload & Order
              </Nav.Link>
              <Nav.Link className="ml-2" href="#link">
                Track Order
              </Nav.Link>
              <Nav.Link className="ml-2" href="#link">
                Live Chat
              </Nav.Link>
              <Nav.Link className="ml-2" href="#link">
                16731
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="">
        <Row className="d-flex align-items-center">
          <Col md={1}>
            <img src="https://aleshamart.com/images/frontend/logo.png" alt="" />
          </Col>
          <Col md={11}>
            <div className="d-none d-sm-block">
              <div className="d-flex align-items-center">
                <input
                  placeholder="Search"
                  id="search"
                  type="text"
                  className="form-control"
                />
                <FontAwesomeIcon
                  className="search-icon text-white"
                  icon={faSearch}
                />
                <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
              </div>
            </div>
          </Col>
        </Row>

        <Row className="category-border mt-2">
          <Col md={3}>
            <div className="d-flex align-items-center justify-content-between ">
              <h5 className="text-color">CATEGORY</h5>
              <FontAwesomeIcon className="arrow-icon" icon={faAngleDown} />
            </div>
          </Col>
          <Col className="" md={9}>
            <Nav className="d-flex justify-content-end align-items-center">
              <Nav.Link className="ml-4 nav-color" href="#home">
                CAMPAIGN
              </Nav.Link>
              <Nav.Link className="ml-4 nav-color" href="#link">
                DISCOUNT
              </Nav.Link>
              <FontAwesomeIcon className="icon-style ml-4" icon={faPlus} />
              <Nav.Link className="nav-color" href="#link">
                SIGN UP
              </Nav.Link>
              <FontAwesomeIcon className="icon-style ml-4" icon={faUser} />
              <Nav.Link className="nav-color" href="#link">
                LOGIN
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavigationBar;
