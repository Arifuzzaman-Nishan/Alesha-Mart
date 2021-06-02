import React from "react";
import "./Collection.css";
import { Row } from "react-bootstrap";
import ShowCollection from "../ShowCollection/ShowCollection";
import "./Collection.css";
import beverageData from "../fakeData/beverage";
import shoeData from '../fakeData/shoe';
import mobileData from '../fakeData/mobile';
import gadgetData from '../fakeData/gadget';
import bikeData from '../fakeData/bike';



const Collection = () => {
  console.log(beverageData);
  return (
    <div>
      <div className='mb-5'>
        <h5 className="primary-color text-center mb-4">TRANSCOM BEVERAGE BRAND STORE</h5>
        <Row className='cursor d-flex justify-content-center'>
            {beverageData.map((data) => (
              <ShowCollection data={data} />
            ))}
        </Row>
      </div>

      <div className='mb-5'>
        <h5 className="primary-color text-center mb-4">CORIUM BANGLADESH BRAND STORE</h5>
        <Row className='cursor d-flex justify-content-center'>
            {shoeData.map((data) => (
              <ShowCollection data={data} />
            ))}
        </Row>
      </div>

      <div className='mb-5'>
        <h5 className="primary-color text-center mb-4">MOBILES</h5>
        <Row className='cursor d-flex justify-content-center'>
            {mobileData.map((data) => (
              <ShowCollection data={data} />
            ))}
        </Row>
      </div>

      <div className='mb-5'>
        <h5 className="primary-color text-center mb-4">GADGET N GADGET OFFICIAL STORE</h5>
        <Row className='cursor d-flex justify-content-center'>
            {gadgetData.map((data) => (
              <ShowCollection data={data} />
            ))}
        </Row>
      </div>

      <div className='mb-5'>
        <h5 className="primary-color text-center mb-4">BIKE & SCOOTER</h5>
        <Row className='cursor d-flex justify-content-center'>
            {bikeData.map((data) => (
              <ShowCollection data={data} />
            ))}
        </Row>
      </div>

    </div>
  );
};

export default Collection;
