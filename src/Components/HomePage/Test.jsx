import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";
import CategoryCard from "../Cards/CategoryCard";
import img1 from "../Assets/Images/58K71NWBWsZTy2iHVHlKq01647845123.png";
import img2 from "../Assets/Images/58NJ1UWLN9CA2bdY1zHnLQ1647844175.png";
import img3 from "../Assets/Images/58RaVqfpUo3fmJmrgxPfa41647843520.png";
import img4 from "../Assets/Images/58YvR1ae2cKnq6L9XPPhgI1647844007.png";
import { Container, Row } from "react-bootstrap";
export default function Test() {
  return (
    <>
      <Container>
        <Row>
          <Swiper
            dir="rtl"
            slidesPerView={6}
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
            className="mySwiper"
          >
            <Row className="my-2 d-flex justify-content-between">
              <SwiperSlide>
                <CategoryCard img={img1} />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={img2} />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <CategoryCard img={img3} />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <CategoryCard img={img4} />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <CategoryCard img={img1} />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <CategoryCard img={img2} />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={img1} />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={img2} />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <CategoryCard img={img3} />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <CategoryCard img={img4} />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <CategoryCard img={img1} />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <CategoryCard img={img2} />
              </SwiperSlide>
            </Row>
          </Swiper>
        </Row>
      </Container>
    </>
  );
}
