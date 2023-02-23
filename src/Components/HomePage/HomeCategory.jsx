import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "../Cards/CategoryCard";
import SubTitle from "../Utitlties/SubTitle";
import img1 from "../Assets/Images/58K71NWBWsZTy2iHVHlKq01647845123.png";
import img2 from "../Assets/Images/58NJ1UWLN9CA2bdY1zHnLQ1647844175.png";
import img3 from "../Assets/Images/58RaVqfpUo3fmJmrgxPfa41647843520.png";
import img4 from "../Assets/Images/58YvR1ae2cKnq6L9XPPhgI1647844007.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  Scrollbar,
  Keyboard,
  FreeMode,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-element.min.css";
import "swiper/swiper-element-bundle.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css";

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
        <Row className="my-2 d-flex justify-content-between">
          <Swiper
            centeredSlides={true}
            loop={true}
            scrollbar={{ draggable: true }}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Keyboard, Scrollbar]}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
            dir="rtl"
          >
            <SwiperSlide>
              <CategoryCard img={img1} />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard img={img2} />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard img={img3} />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard img={img4} />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard img={img1} />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard img={img2} />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard img={img3} />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard img={img4} />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard img={img1} />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard img={img2} />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard img={img3} />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard img={img4} />
            </SwiperSlide>
          </Swiper>
        </Row>
      </Container>
    </>
  );
}
