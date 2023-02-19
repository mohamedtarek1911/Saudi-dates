import React from "react";
import { Container } from "react-bootstrap";
import Slider from "../Utitlties/Slider";
import HomeCategory from "./HomeCategory";
import HomeIcons from "./HomeIcons";
import HomeSection from "./HomeSection";
import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2";
import HomeSection3 from "./HomeSection3";
import HomeSection4 from "./HomeSection4";
import Test from "./Test";

export default function HomePage() {
  return (
    <>
      <Container>
        <Slider />
      </Container>
      <HomeIcons />
      <HomeCategory />
      <HomeSection />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      {/* <Test /> */}
    </>
  );
}
