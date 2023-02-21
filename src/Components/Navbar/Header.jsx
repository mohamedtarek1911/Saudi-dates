import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import logo from "../Assets/Images/Group 112.png";
export default function Header() {
  return (
    <>
      {/* <div style={{ minHeight: "80px" }}>
        <Navbar variant="light">
          <Container>
            <Navbar.Brand className="header_section" href="#home">
              <div>
                <img className="header_logo" src={logo} alt="" />
              </div>
              <div className="vertical_line"></div>
              <div className="icon_header">
                <i className="fa-solid fa-earth-asia"></i>
              </div>
              <div className="choose">
                <p className="choose_text">
                  الشحن إلى <i class="fa-solid fa-chevron-down"></i>
                </p>
                <p>السعودية</p>
              </div>
            </Navbar.Brand>
            <Nav className="ms-auto mx-2">
              <Nav.Link className="mx-2" href="#home">
                الرئيسية
              </Nav.Link>
              <Nav.Link className="mx-2" href="#features">
                عن المنصة
              </Nav.Link>
              <Nav.Link className="mx-2" href="#pricing">
                المتاجر
              </Nav.Link>
              <Nav.Link className="mx-2" href="#hope">
                الوصفات
              </Nav.Link>
              <div>
                <Form className="d-flex ms-2">
                  <Form.Control
                    type="search"
                    placeholder="ما الذي تبحث عنه ؟"
                    className="me-2 position-relative"
                    aria-label="Search"
                    dir="rtl"
                  />
                </Form>
                <span className="position-absolute search_icon">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>
              <div className="d-flex align-content-center align-items-center justify-content-around mx-4">
                <div>
                  <button bg="success" className="btn btn-success text-white">
                    تسجيل الدخول
                  </button>
                </div>
                <div className="vertical_line2 mx-4"></div>
                <div className="d-flex  justify-content-around">
                  <div className="mx-3">
                    <i class="fa-solid fa-globe"></i>
                  </div>
                  <div>
                    <i class="fa-solid fa-chevron-up"></i>
                  </div>
                </div>
              </div>
            </Nav>
          </Container>
        </Navbar>
      </div> */}

      <Navbar expand="lg">
        <Container>
          <Navbar.Brand className="header_section" href="#home">
            <div>
              <img className="header_logo" src={logo} alt="" />
            </div>
            {/* <div className="vertical_line"></div>
            <div className="icon_header">
              <i className="fa-solid fa-earth-asia"></i>
            </div>
            <div className="choose">
              <p className="choose_text">
                الشحن إلى <i class="fa-solid fa-chevron-down"></i>
              </p>
              <p>السعودية</p>
            </div> */}
          </Navbar.Brand>
          <div className="header_section">
            <div>{/* <img className="header_logo" src={logo} alt="" /> */}</div>
            <div className="vertical_line"></div>
            <div className="icon_header">
              <i className="fa-solid fa-earth-asia"></i>
            </div>
            <div className="choose">
              <p className="choose_text">
                الشحن إلى <i class="fa-solid fa-chevron-down"></i>
              </p>
              <p>السعودية</p>
            </div>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mx-2">
              <Nav.Link className="mx-2" href="#home">
                الرئيسية
              </Nav.Link>
              <Nav.Link className="mx-2" href="#features">
                عن المنصة
              </Nav.Link>
              <Nav.Link className="mx-2" href="#pricing">
                المتاجر
              </Nav.Link>
              <Nav.Link className="mx-2" href="#hope">
                الوصفات
              </Nav.Link>
              <div>
                <Form className="d-flex ms-2 position-relative">
                  <Form.Control
                    type="search"
                    placeholder="ما الذي تبحث عنه ؟"
                    className="me-2 "
                    aria-label="Search"
                    dir="rtl"
                  />
                  <span className="position-absolute search_icon">
                    <i className="fa-solid fa-magnifying-glass text-white"></i>
                  </span>
                </Form>
              </div>
              <div className="d-flex align-content-center align-items-center justify-content-around mx-4 ">
                <div>
                  <button bg="success" className="btn btn-success text-white">
                    تسجيل الدخول
                  </button>
                </div>
                <div className="vertical_line2 mx-4"></div>
                <div className="d-flex  justify-content-around">
                  <div className="mx-3">
                    <i class="fa-solid fa-globe"></i>
                  </div>
                  <div>
                    <i class="fa-solid fa-chevron-up"></i>
                  </div>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
