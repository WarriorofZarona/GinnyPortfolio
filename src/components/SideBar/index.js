import React from 'react';
import './style.css'
import { Nav, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function SideBar() {

    return (
        <Nav fluid className='col-md-12 d-none d-md-block sidebar'>


            <Nav.Item className='nav-item'>
                <Nav.Link href='/graphic-design'>
                    Graphic Design</Nav.Link>
            </Nav.Item>
            <Nav.Item className='nav-item'>
                <Nav.Link href='/digital-artwork'>
                    Digital Artwork</Nav.Link>
            </Nav.Item>
            <Nav.Item className='nav-item'>
                <Nav.Link href='/paintings'>
                    Paintings</Nav.Link>
            </Nav.Item>
            <Nav.Item className='nav-item'>
                <Nav.Link href='/portraits'>
                    Portraits</Nav.Link>
            </Nav.Item>
            <Nav.Item className='nav-item'>
                <Nav.Link href='/emotes'>
                    Emotes</Nav.Link>
            </Nav.Item>
            <Nav.Item className='nav-item'>
                <Nav.Link href='/about-me'>
                    About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item className='nav-item'>
                <Nav.Link href='/contact'>
                    Contact</Nav.Link>
            </Nav.Item>

            <Row className='icons'>
                <i className="fab fa-instagram icon-item"></i>
                <i className="fab fa-twitter icon-item"></i>
                <i className="fab fa-behance icon-item"></i>
            </Row>
        </Nav >
    )
}

export default SideBar;