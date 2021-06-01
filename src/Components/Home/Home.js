import React from "react";
import { Card, Carousel, Container, Row } from "react-bootstrap";
import banner1 from "../../bannerImages/1.png";
import banner2 from "../../bannerImages/2.png";
import banner3 from "../../bannerImages/3.png";
import banner4 from "../../bannerImages/4.png";
import HomeCardShow from "../HomeCardShow/HomeCardShow";
import "./Home.css";

const Home = () => {
  const bannerFakeData = [
    {
      img: banner1,
    },
    {
      img: banner2,
    },
    {
      img: banner3,
    },
    {
      img: banner4,
    },
  ];

  const cardFakeData = [
    {
      img: "https://aleshamart.com/images/frontend/al_1.jpg",
      name: "Prescription Upload & Order",
    },
    {
      img: "https://aleshamart.com/images/frontend/al_2.jpg",
      name: "BID HERE",
    },
    {
      img: "https://aleshamart.com/images/frontend/al_3.jpg",
      name: "Be Member",
    },
  ];
  return (
    <div className=''>
      <Carousel >
        {bannerFakeData.map((image) => (
          <Carousel.Item interval={3000}>
            <div className="img-height">
              <img
                className="img-fluid"
                src={image.img}
                alt="First slide"
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Home card data */}
      
        <Row className='my-5'>
          {cardFakeData.map((data) => (
            <HomeCardShow data={data} />
          ))}
        </Row>
    </div>
  );
};

export default Home;
