import React from 'react';
import './style.css'
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function SideBar() {

    return (
        <Nav fluid className='col-md-12 d-none d-md-block sidebar'>
            <div className="nav">Graphic Design</div>
            <div className="nav">Digital Artwork</div>
            <div className="nav">Paintings</div>
            <div className="nav">Portraits</div>
            <div className="nav">Emotes</div>
            <div className="nav">About Me</div>
            <div className="nav">Contact</div>
            <i className="fab fa-instagram icon-item"></i>
            <i className="fab fa-twitter icon-item"></i>
            <i className="fab fa-behance icon-item"></i>
        </Nav >
    )
}

export default SideBar;