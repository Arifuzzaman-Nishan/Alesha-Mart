import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./HomeCardShow.css";

const HomeCardShow = ({ data }) => {
  const { img, name } = data;
  return (
    <Col md={4}>
      <Card
        className="m-auto home-card"
        style={{ width: "20rem",padding:'10px 25px' }}
      >
        <Card.Img variant="top" src={img} />
        <Card.Body className="mx-auto">
          <Button variant="danger">
            {name}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HomeCardShow;
