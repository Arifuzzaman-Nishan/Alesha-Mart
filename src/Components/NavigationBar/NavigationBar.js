import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">support@aleshamart.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Download App</Nav.Link>
              <Nav.Link href="#link">Merchant Zone</Nav.Link>
              <Nav.Link href="#link">Become A Member</Nav.Link>
              <Nav.Link href="#link">Upload & Order</Nav.Link>
              <Nav.Link href="#link">Track Order</Nav.Link>
              <Nav.Link href="#link">Live Chat</Nav.Link>
              <Nav.Link href="#link">16731</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="">
        <Row className='d-flex align-items-center'>
          <Col md={1}>
            <img src="https://aleshamart.com/images/frontend/logo.png" alt="" />
          </Col>
          <Col md={11}>
            <div className='d-none d-sm-block'>
              <input placeholder='Search' id='search' type="text" className="form-control" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavigationBar;
