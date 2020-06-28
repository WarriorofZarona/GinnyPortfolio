import React from 'react';
import './style.css'
import { Navbar, Col } from 'react-bootstrap';

function TopBar() {

    return (
        <Navbar className="top-bar fixed-top">
            <Col className="logo">Ginny GreyBill
        </Col>
        </Navbar>
    )
}

export default TopBar;