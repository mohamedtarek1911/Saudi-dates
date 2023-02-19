import React from "react";
import { Col } from "react-bootstrap";
export default function IconCard({ Icon, img, title }) {
  return (
    <>
      <Col
        xs="6"
        sm="6"
        md="4"
        lg="2"
        className="my-4 d-flex justify-content-around  "
      >
        <div className="allCard mb-3 ">
          {/* <img alt="zcv" src={img} className="categoty-card-img" /> */}
          {img ? (
            <img alt="zcv" src={img} className="categoty-card-img" />
          ) : (
            Icon
          )}

          <div>
            <p className="categoty-card-text my-2">{title}</p>
          </div>
        </div>
      </Col>
    </>
  );
}
