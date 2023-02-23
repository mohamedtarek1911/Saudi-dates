import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-element.min.css";
import "swiper/swiper-element-bundle.min.css";
import "./TestCss.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css";
import { Container, Row } from "react-bootstrap";
import {
  Pagination,
  Navigation,
  Scrollbar,
  Keyboard,
  FreeMode,
  Autoplay,
} from "swiper";
import img from "../Assets/Images/26akEWlThxtGS5UdC0NQ6l1648626022.png";
import CategoryCard from "../Cards/CategoryCard";
export default function Test2() {
  return (
    <>
      <Container>
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
              slidesPerView: 2,
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
            <Row>
              <SwiperSlide>
                <CategoryCard img={img} />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={img} />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={img} />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={img} />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={img} />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={img} />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={img} />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={img} />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={img} />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={img} />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={img} />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={img} />
              </SwiperSlide>
            </Row>
        </Swiper>
      </Container>
    </>
  );
}
