import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const ShowCollection = (props) => {
  // console.log(props)
  // const {title} = props;
  const { description, discount, img, newPrice, oldPrice } = props.data;
  // console.log(description)
  return (
    <div>
      <Col className="mb-4" md={2}>
        <Card className="p-2" style={{ width: "13rem", height: "400px" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <h6 className="text-color">{description}</h6>
            <div className="d-flex justify-content-between bold">
              <p>{newPrice}</p>
              <p>{discount}</p>
            </div>
            <div>
              <h6 className="old-price text-secondary">{oldPrice}</h6>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ShowCollection;
