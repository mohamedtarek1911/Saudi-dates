import React, { useRef, useState } from "react";
// Import slick React components
import Slider from "react-slick";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import required modules
import CategoryCard from "../Cards/CategoryCard";
import img1 from "../Assets/Images/58K71NWBWsZTy2iHVHlKq01647845123.png";
import img2 from "../Assets/Images/58NJ1UWLN9CA2bdY1zHnLQ1647844175.png";
import img3 from "../Assets/Images/58RaVqfpUo3fmJmrgxPfa41647843520.png";
import img4 from "../Assets/Images/58YvR1ae2cKnq6L9XPPhgI1647844007.png";
import { Container, Row } from "react-bootstrap";
export default function Test() {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 5,
    dots: true,
    slidesToScroll: 1,
    rtl: true,
    // centerPadding: "60px",
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <>
      <Container>
        <Slider {...settings}>
          <div>
            <CategoryCard img={img1} />
          </div>
          <div>
            <CategoryCard img={img2} />
          </div>
          <div>
            <CategoryCard img={img3} />
          </div>
          <div>
            <CategoryCard img={img4} />
          </div>
          <div>
            <CategoryCard img={img1} />
          </div>
          <div>
            <CategoryCard img={img2} />
          </div>
          <div>
            <CategoryCard img={img3} />
          </div>
          <div>
            <CategoryCard img={img4} />
          </div>
        </Slider>
      </Container>
    </>
  );
}
