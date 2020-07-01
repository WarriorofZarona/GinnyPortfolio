import React from 'react';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

function MainContent() {

    return (
        <Container fluid="md" className="main-content">
            <Row>
                <h1>Graphic Design</h1>
                <hr />
            </Row>
            <Row>
                <Col><img src="https://via.placeholder.com/150" /></Col>
                <Col><img src="https://via.placeholder.com/150" /></Col>
                <Col><img src="https://via.placeholder.com/150" /></Col>
            </Row>
            <Row>
                <h1>Graphic Design</h1>
                <hr />
            </Row>
            <Row>
                <h1>Graphic Design</h1>
                <hr />
            </Row>
            <Row>
                <h1>Graphic Design</h1>
                <hr />
            </Row>
            <Row>
                <h1>Graphic Design</h1>
                <hr />
            </Row>
        </Container>
    )

};

export default MainContent;