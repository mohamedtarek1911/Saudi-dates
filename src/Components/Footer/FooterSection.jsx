import React from "react";
import { Col } from "react-bootstrap";
import logo from "../Assets/Images/logo.png";
import img from "../Assets/Images/Group 19661.png";
import phone from "../Assets/Images/phone-volume.png";
import face from "../Assets/Images/Group 19673.png";
import insta from "../Assets/Images/Group 19671.png";
import twitter from "../Assets/Images/Group 19672.png";
import img1 from "../Assets/Images/Group 19664.png";
import img2 from "../Assets/Images/Group 19665.png";
import img3 from "../Assets/Images/Group 19666.png";
import img4 from "../Assets/Images/Group 19667.png";
import img5 from "../Assets/Images/Group 19670@2x.png";

export default function FooterSection() {
  return (
    <>
      <Col
        // xs="12"
        // sm="12"
        // md="3"
        // lg="2"
        className="my-4 d-flex justify-content-around flex-column"
      >
        <div>
          <img src={logo} alt="zxv" />
        </div>
        <div className="line my-3"></div>
        <div>
          <img src={img} alt="zxv" />
        </div>
        <div
          style={{ width: "210px" }}
          className="mt-5 d-flex justify-content-around"
        >
          <div>
            <img src={phone} alt="" />
          </div>
          <div className=" phone-number">8003010088</div>
        </div>
        <div className="line my-3"></div>
        <div
          style={{ maxWidth: "210px" }}
          className="icons d-flex justify-content-around"
        >
          <div className="icon">
            <img src={insta} alt="" />
          </div>
          <div className="icon_center border-start border-end">
            <div className="icon">
              <img src={twitter} alt="" />
            </div>
          </div>
          <div className="icon">
            <img src={face} alt="" />
          </div>
        </div>
        <div
          style={{ maxWidth: "210px" }}
          className="d-flex justify-content-around my-4"
        >
          <div>
            <img src={img1} alt="zxv" />
          </div>
          <div>
            <img src={img2} alt="zxv" />
          </div>
          <div>
            <img src={img3} alt="zxv" />
          </div>
          <div>
            <img src={img4} alt="zxv" />
          </div>
          <div>
            <img src={img5} alt="zxv" />
          </div>
        </div>
      </Col>
    </>
  );
}
