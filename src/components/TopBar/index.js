import React from "react";
import { Navbar, Col, Row } from "react-bootstrap";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

function TopBar() {
  return (
    <Navbar className="top-bar fixed-top">
      <Row>
        <Col sm="auto" className="logo">
          Ginny Graybill
        </Col>
      </Row>
    </Navbar>
  );
}

export default TopBar;
