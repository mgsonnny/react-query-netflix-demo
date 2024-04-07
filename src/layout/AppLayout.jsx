import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";

//bg-body-tertiary

const AppLayout = () => {
  return (
    <div className="black-bg">
      <Navbar expand="lg" className="navbar" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#" onClick={() => (window.location.href = "/")}>
            {/* <img
              src="https://images.ctfassets.net/4cd45et68cgf/4nBnsuPq03diC5eHXnQYx/d48a4664cdc48b6065b0be2d0c7bc388/Netflix-Logo.jpg"
              alt="Netflix Logo"
              style={{ width: "93px", height: "auto" }} // 이미지 크기 조정
            /> */}
            <img
              src="/image/LOGO_N.PNG"
              alt="Netflix Logo"
              style={{ width: "70px", height: "50px" }} // 이미지 크기 조정
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#" onClick={() => (window.location.href = "/")}>
                Home
              </Nav.Link>
              <Nav.Link
                href="#"
                onClick={() => (window.location.href = "/movies")}
              >
                Movies
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
