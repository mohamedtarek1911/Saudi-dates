import React from "react";
import { Card, Col, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function CategoryCard({ img }) {
  return (
    <>
      <Col
        xs="6"
        sm="6"
        md="4"
        lg="2"
        className="my-4 d-flex justify-content-around allcards "
      >
        <div className="cardall">
          <div className="allCard2 mb-3 ">
            <img alt="zcv" src={img} className="categoty-card-img2" />
          </div>
          <div className="card_content">
            <p className="card_content-title">معمول أصابع ماما تمر</p>
            <p className="card_content-Subtitle">تمور الرفاعي</p>
            <div className="card_content-salary my-3">
              <p className="text-Dark salary">
                500 <span>ر.س</span>
              </p>
            </div>
            <div className="card_footer my-4">
              <div className="circle_cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
              <div className="weight">
                <h6> كرتون</h6>
              </div>
              <div className="weight">
                <h6>1 كيلو</h6>
              </div>
            </div>
            <div className="card_icon">
              <div className="fav_icon">
                <i className="fa-solid fa-heart"></i>
              </div>
              <div className="card_rate">
                <span>4.8</span>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}
