import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "../Cards/CategoryCard";
import SubTitle from "../Utitlties/SubTitle";
import img1 from "../Assets/Images/58K71NWBWsZTy2iHVHlKq01647845123.png";
import img2 from "../Assets/Images/58NJ1UWLN9CA2bdY1zHnLQ1647844175.png";
import img3 from "../Assets/Images/58RaVqfpUo3fmJmrgxPfa41647843520.png";
import img4 from "../Assets/Images/58YvR1ae2cKnq6L9XPPhgI1647844007.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar, Autoplay } from "swiper";

export default function HomeCategory() {
  return (
    <>
      <Container
        className="bg-white py-5 category_section"
        style={{ minHeight: "570px" }}
      >
        <SubTitle
          className="my-4"
          title={"المنتجات الأكثر مبيعا لمنتجات التمور"}
          btntitle={"عرض الكل"}
        />
        <Row className="my-2 d-flex justify-content-between ">
          <Swiper
            autoplay={{
              delay: 25000000,
              disableOnInteraction: false,
            }}
            dir="rtl"
            slidesPerView={6}
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar, Autoplay]}
            className="mySwiper"
          >
            <Container>
              <Row>
                {/* <SwiperSlide xs="6" sm="6" md="4" lg="2">
                  {({ isActive }) => (
                    <div>
                      Current slide is {isActive ? "active" : "not active"}
                    </div>
                  )}
                  <CategoryCard img={img1} />
                </SwiperSlide>
                <SwiperSlide xs="6" sm="6" md="4" lg="2">
                  <CategoryCard img={img1} />
                </SwiperSlide>
                <SwiperSlide xs="6" sm="6" md="4" lg="2">
                  <CategoryCard img={img1} />
                </SwiperSlide>
                <SwiperSlide xs="6" sm="6" md="4" lg="2">
                  <CategoryCard img={img1} />
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryCard img={img1} />
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryCard img={img1} />
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryCard img={img1} />
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryCard img={img1} />
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryCard img={img1} />
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryCard img={img1} />
                </SwiperSlide> */}
                <CategoryCard img={img1} />
                <CategoryCard img={img2} />
                <CategoryCard img={img3} />
                <CategoryCard img={img4} />
                <CategoryCard img={img1} />
                <CategoryCard img={img2} />
              </Row>
            </Container>
          </Swiper>
        </Row>
      </Container>
    </>
  );
}
