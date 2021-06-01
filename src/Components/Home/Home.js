import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../bannerImages/1.jpg";
import banner2 from "../../bannerImages/2.jpg";
import banner3 from "../../bannerImages/3.jpg";
import banner4 from "../../bannerImages/4.jpg";
import './Home.css';

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
  return (
    <div>
      <Carousel>
        {bannerFakeData.map((image) => (
          <Carousel.Item interval={1000}>
            <div className='img-height'>
              <img
                className="d-block w-100"
                src={image.img}
                alt="First slide"
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
