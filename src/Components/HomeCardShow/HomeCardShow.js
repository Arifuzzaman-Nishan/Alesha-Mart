import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import './HomeCardShow.css';

const HomeCardShow = ({ data }) => {
  const { img, name } = data;
  return (
    <Col className='' md={4}>
      <Card className='mx-auto home-card' style={{ width: "25rem",padding:'10px 60px' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body className='mx-auto'>
          <Button className='' variant="danger">{name}</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HomeCardShow;
