import React from "react";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SubTitle({ title, btntitle, pathText }) {
  return (
    <>
      <div className="d-flex justify-content-between pt-4">
        <div className="sub-tile">{title}</div>
        {/* <div className="double-line"></div> */}
        {/* <div>
          <hr />
        </div> */}
        {btntitle ? (
          <NavLink to={`${pathText}`} style={{ textDecoration: "none" }}>
            <div className="shopping-now">{btntitle}</div>
          </NavLink>
        ) : null}
      </div>
    </>
  );
}
