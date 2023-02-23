import React from "react";
import {
  Carousel,
  SwipeSlider,
  Bullets,
  ScrollSlider,
} from "@farfetch/react-carousel";
import "@farfetch/react-carousel/styles.css";
import { Container } from "react-bootstrap";

export default function Test3() {
  const handleAfterChange = (e) => {
    console.log(e.index);
    console.log(e.dir);
  };

  return (
    <>
      <Container style={{ minHeight: "500px" }} className="my-3">
        <Carousel
          className="container"
          isInfinite
          isRTL
          itemsToShow={2}
          onAfterChange={handleAfterChange}
        >
          <ScrollSlider className="slider" limitScroll>
            <div className="customItem">Item 1</div>
            <div className="moreCustomItem}">Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
          </ScrollSlider>
          <Bullets />
        </Carousel>
      </Container>
    </>
  );
}
