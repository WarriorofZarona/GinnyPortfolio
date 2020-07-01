import React from 'react';
import './style.css'
import { Navbar, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function TopBar() {

    return (
        <Navbar className="top-bar fixed-top">
            <Col md="auto" className="logo">Ginny Graybill
        </Col>
        </Navbar>
    )
}

export default TopBar;