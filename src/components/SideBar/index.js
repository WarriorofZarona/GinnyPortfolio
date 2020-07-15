import React from 'react';
import './style.css'
import { Nav, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function SideBar(props) {

    return (
        <Col md={3} lg={2}>
            <Nav fluid className='col-lg-12 d-none d-lg-block sidebar'>
                <Nav.Item className='nav-item'>
                    <Nav.Link
                        onClick={() => props.fetchGallery('graphic design')}
                    >
                        Graphic Design
                </Nav.Link>
                </Nav.Item>
                <Nav.Item className='nav-item'>
                    <Nav.Link
                        onClick={() => props.fetchGallery('digital artwork')}>
                        Digital Artwork</Nav.Link>
                </Nav.Item>
                <Nav.Item className='nav-item'>
                    <Nav.Link href='/social-media-assets'>
                        Social Media Assets</Nav.Link>
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
                        <Nav.Link target="_blank" href='https://www.instagram.com/ginnygravity/?hl=en'><i className="fab fa-instagram"></i></Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link target="_blank" href='https://twitter.com/ginnygravity'><i className="fab fa-twitter"></i></Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link target="_blank" href='https://www.behance.net/virginigraybil'><i className="fab fa-behance"></i></Nav.Link>
                    </Col>
                </Row>
            </Nav >
        </Col >
    )
}

export default SideBar;