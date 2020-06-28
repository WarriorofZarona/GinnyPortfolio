import React from 'react';
import './style.css'
import { Container, Row } from 'react-bootstrap';


function SideBar() {

    return (
        <Container fluid className='side-bar'>
            <div className="nav">Graphic Design</div>
            <div className="nav">Digital Artwork</div>
            <div className="nav">Paintings</div>
            <div className="nav">Portraits</div>
            <div className="nav">Emotes</div>
            <div className="nav">About Me</div>
            <div className="nav">Contact</div>
            <Row className="icons fixed-bottom">
                <i className="fab fa-instagram icon-item"></i>
                <i className="fab fa-twitter icon-item"></i>
                <i className="fab fa-behance icon-item"></i>
            </Row>
        </Container >
    )
}

export default SideBar;