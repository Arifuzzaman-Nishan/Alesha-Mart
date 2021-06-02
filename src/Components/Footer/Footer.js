import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
  faTelegramPlane
} from "@fortawesome/free-brands-svg-icons";

import {
    faPhoneAlt
  } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col md={3}>
            <p className="bold primary-color">CONTACT</p>
            <small className='text-white'>
              Corporate Office: Praasad Trade Center (3rd Floor), 6 Kemal
              Ataturk Avenue, Banani C/A, Dhaka-1213 Registered Office: Rupsha
              Tower, Flat# 10/B , Plot# 7, Road# 17, Banani C/A, Dhaka-1213
            </small>
            <br />
            <FontAwesomeIcon className='mr-2 font-icon primary-color ' icon={faTelegramPlane}/>
            <small className='primary-color bold'>support@gmail.com</small>
            <br />
            <FontAwesomeIcon className='mr-2 font-icon primary-color ' icon={faPhoneAlt}/>
            <small className='primary-color bold'>16731</small>
          </Col>
          <Col md={2}>
            <p className="bold primary-color">QUICK LINK</p>
            <ul className="list-unstyled ">
              <li>
                <a href="">About Aleshamart</a>
              </li>
              <li>
                <a href="">My Account</a>
              </li>
              <li>
                <a href="">Aleshamart Merchant</a>
              </li>
              <li>
                <a href="">Career</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <p className="bold primary-color">HELP</p>
            <ul className="list-unstyled">
              <li>
                <a href="">Payments</a>
              </li>
              <li>
                <a href="">Cancellation & Returns</a>
              </li>
              <li>
                <a href="">About Premium Membership</a>
              </li>
              <li>
                <a href="">About Alesha Bidding</a>
              </li>
              <li>
                <a href="">Easy Ordering</a>
              </li>
              <li>
                <a href="">Terms & Condition</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Help Center</a>
              </li>
            </ul>
          </Col>
          <Col md={5}>
            <p className="bold primary-color">NEWSLETTER</p>
            <div className="d-flex">
              <input type="text" className="form-control" />
              <input className='btn btn-danger' type="submit" value="SUBSCRIBE" />
            </div>

            <p className="mt-3 bold primary-color">JOIN US</p>

            <ul className="list-inline social-media">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon className="icon fb" icon={faFacebookF} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon
                    className="icon google"
                    icon={faGooglePlusG}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon insta" icon={faInstagram} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <p className="bold primary-color">
            Copyright {new Date().getFullYear()} All rights Reversed
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
