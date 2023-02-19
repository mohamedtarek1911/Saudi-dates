import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "../Cards/CategoryCard";
import SubTitle from "../Utitlties/SubTitle";
import img1 from "../Assets/Images/58K71NWBWsZTy2iHVHlKq01647845123.png";
import img2 from "../Assets/Images/58NJ1UWLN9CA2bdY1zHnLQ1647844175.png";
import img3 from "../Assets/Images/58RaVqfpUo3fmJmrgxPfa41647843520.png";
import img4 from "../Assets/Images/58YvR1ae2cKnq6L9XPPhgI1647844007.png";
export default function HomeSection1() {
  return (
    <>
      {" "}
      <Container
        className="bg-white py-5 category_section"
        style={{ minHeight: "570px" }}
      >
        <SubTitle
          className="my-4"
          title={"المنتجات الأكثر مبيعا للمناصيف و البسر"}
          btntitle={"عرض الكل"}
        />
        <Row className="my-2 d-flex justify-content-between ">
          <CategoryCard img={img1} />
          <CategoryCard img={img2} />
          <CategoryCard img={img3} />
          <CategoryCard img={img4} />
          <CategoryCard img={img1} />
          <CategoryCard img={img2} />
        </Row>
      </Container>
    </>
  );
}
