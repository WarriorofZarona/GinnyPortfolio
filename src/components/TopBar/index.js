import React from 'react';
import './style.css'
import { Navbar, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function TopBar() {

    return (
        <Navbar className="top-bar fixed-top">
            <Row>
                <Col md="auto" className="logo">Ginny Graybill</Col>
            </Row>
        </Navbar>
    )
}

export default TopBar;