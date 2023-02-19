import React from "react";
import { Container, Row } from "react-bootstrap";
import FooterSection from "./FooterSection";
import FooterSection1 from "./FooterSection1";
import FooterSection2 from "./FooterSection2";
import FooterSection3 from "./FooterSection3";

export default function Footer() {
  return (
    <>
      <div style={{ minHeight: "400PX" }} className="Footer_Section">
        <Container>
          <Row>
            <FooterSection />
            <FooterSection1 />
            <FooterSection2 />
            <FooterSection3 />
          </Row>
        </Container>
      </div>
    </>
  );
}
