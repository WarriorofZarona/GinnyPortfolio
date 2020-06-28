import React from 'react';
import './style.css'
import { Container } from 'react-bootstrap';


function SideBar() {

    return (
        <Container className='side-bar'>
            <div className="nav">Graphic Design</div>
            <div className="nav">Digital Artwork</div>
            <div className="nav">Paintings</div>
            <div className="nav">Portraits</div>
            <div className="nav">Emotes</div>
            <div className="nav">About Me</div>
            <div className="nav">Contact</div>
        </Container >
    )
}

export default SideBar;