import React from "react";
import { Col } from "react-bootstrap";

export default function FooterSection1() {
  return (
    <>
      <Col
        // xs="12"
        // sm="12"
        // md="3"
        // lg="2"
        className="my-4 d-flex flex-column"
      >
        <h4 className="head_section">متسوق</h4>
        <div className="heading_line my-1"></div>
        <h5 className="content_section">تسجيل الدخول</h5>
        <h5 className="content_section mt-4">التسويق بعمولة</h5>
      </Col>
    </>
  );
}
