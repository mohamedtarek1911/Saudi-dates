import React from "react";
import { Col } from "react-bootstrap";

export default function FooterSection3() {
  return (
    <>
      <Col
        // xs="12"
        // sm="12"
        // md="3"
        // lg="2"
        className="my-4 d-flex flex-column text-center"
      >
        <h4 className="head_section">تمور السعودية</h4>
        <div className="heading_line-section4 my-1"></div>
        <h5 className="content_section">عن المنصة</h5>
        <h5 className="content_section mt-4">الأسئلة الشائعة</h5>
        <h5 className="content_section mt-4">المدونة</h5>
        <h5 className="content_section mt-4">اتفاقية الإستخدام</h5>
      </Col>
    </>
  );
}
