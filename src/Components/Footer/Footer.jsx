import React from "react";
import { Container, Row } from "react-bootstrap";
import FooterSection from "./FooterSection";
import FooterSection1 from "./FooterSection1";
import FooterSection2 from "./FooterSection2";
import FooterSection3 from "./FooterSection3";

export default function Footer() {
  return (
    <>
      <div style={{ minHeight: "500PX" }} className="Footer_Section">
        <Container>
          <Row>
            <FooterSection />
            <FooterSection1 />
            <FooterSection2 />
            <FooterSection3 />
            <div className="Footer_line mt-3"></div>
            <div className="footer_rights">
              جميع الحقوق محفوظة لدى تمور السعودية ©️2022
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}
