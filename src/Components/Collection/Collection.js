import React from "react";
import "./Collection.css";
import beverageData from "../fakeData/beverage";
import { Row } from "react-bootstrap";
import ShowCollection from "../ShowCollection/ShowCollection";
import "./Collection.css";

const Collection = () => {
  console.log(beverageData);
  return (
    <div>
      <div>
        <h5 className="primary-color text-center mb-4">TRANSCOM BEVERAGE BRAND STORE</h5>
        <Row className='cursor d-flex justify-content-center'>
            {beverageData.map((data) => (
              <ShowCollection data={data} />
            ))}
        </Row>
      </div>
    </div>
  );
};

export default Collection;
