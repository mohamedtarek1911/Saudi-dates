import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import img from "../Assets/Images/Union 2.png";
export default function Slider() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel controls={false} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="slider-background" interval={2000}>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <img style={{ width: "100%" }} src={img} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item className="slider-background2" interval={2000}>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <img style={{ width: "100%" }} src={img} alt="First slide" />
          </div>
        </Carousel.Item>

        <Carousel.Item className="slider-background3" interval={2000}>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <img style={{ width: "100%" }} src={img} alt="First slide" />
          </div>
        </Carousel.Item>

        <Carousel.Item className="slider-background4" interval={2000}>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <img style={{ width: "100%" }} src={img} alt="First slide" />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
