import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "../Cards/CategoryCard";
import SubTitle from "../Utitlties/SubTitle";
import img1 from "../Assets/Images/26akEWlThxtGS5UdC0NQ6l1648626022.png";
import img2 from "../Assets/Images/37rZsPNNYYLz96KGBGKcWT1648627443.png";
import img3 from "../Assets/Images/37xuaNI4vdreCYz8PNQzEl1648627559.png";
import img4 from "../Assets/Images/3739PdCw0dsCvmLAFJqDOU1648627500.png";
export default function HomeSection2() {
  return (
    <>
      {" "}
      <Container
        className=" py-5 category_section"
        style={{ minHeight: "570px" }}
      >
        <SubTitle
          className="my-4"
          title={"المنتجات الأكثر مبيعا بالباقات مختارة"}
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
