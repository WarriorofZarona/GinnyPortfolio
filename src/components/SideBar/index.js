import React from 'react';
import './style.css'
import { Nav, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function SideBar() {

    return (
        <Nav fluid className='col-md-12 d-none d-md-block sidebar'>


            <Nav.Item className='nav-item'>
                <Nav.Link className="nav-link" href='/graphic-design'>
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
                <Col>
                    <Nav.Link href='https://www.instagram.com/ginnygravity/?hl=en'><i className="fab fa-instagram"></i></Nav.Link>
                </Col>
                <Col>
                    <Nav.Link href='https://twitter.com/ginnygravity'><i className="fab fa-twitter"></i></Nav.Link>
                </Col>
                <Col>
                    <Nav.Link href='https://www.behance.net/virginigraybil'><i className="fab fa-behance"></i></Nav.Link>
                </Col>
            </Row>
        </Nav >
    )
}

export default SideBar;