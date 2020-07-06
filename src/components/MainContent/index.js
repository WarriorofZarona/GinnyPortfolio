import React, { useState, useEffect } from 'react';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import Portrait from '../../assets/images/1.jpg'
import Landscape from '../../assets/images/VirginiaGraybill_BeercanMockup2.jpg'

function MainContent() {

    const [image, setImage] = useState({
        src: Landscape,
        orientation: "landscape",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a neque lectus. Nunc euismod velit convallis, hendrerit enim quis, porttitor est. Aliquam et luctus metus. Morbi in tristique lorem. Maecenas ullamcorper quam lectus, id molestie nunc tincidunt quis. Nulla facilisi. Maecenas vitae vehicula diam, eu fermentum nunc. Aliquam erat volutpat."
    });

    return (
        <Container fluid className="gallery">
            <Row>
                <Col md={3}>
                    <Container id="graphic-design">
                        <Row>
                            <Col><img className="thumbnail" src="https://via.placeholder.com/100" /></Col>
                            <Col><img className="thumbnail" src="https://via.placeholder.com/100" /></Col>
                        </Row>
                        <Row>
                            <Col><img className="thumbnail" src="https://via.placeholder.com/100" /></Col>
                            <Col><img className="thumbnail" src="https://via.placeholder.com/100" /></Col>
                        </Row>
                        <Row>
                            <Col><img className="thumbnail" src="https://via.placeholder.com/100" /></Col>
                            <Col><img className="thumbnail" src="https://via.placeholder.com/100" /></Col>
                        </Row>
                        <Row>
                            <Col><img className="thumbnail" src="https://via.placeholder.com/100" /></Col>
                            <Col><img className="thumbnail" src="https://via.placeholder.com/100" /></Col>
                        </Row>
                    </Container>
                </Col>

                <Col md={9}>
                    {image.orientation === "portrait" ?
                        <Container fluid>
                            <Row>
                                <Col><img className="portrait" src={image.src} /></Col>
                                <Col> <h4>{image.text}</h4></Col>
                            </Row>
                        </Container>
                        :
                        <Container fluid>
                            <Row>
                                <img className="landscape" src={image.src} />
                            </Row>
                            <Row>
                                <h4>{image.text}</h4>
                            </Row>
                        </Container>
                    }
                </Col>
            </Row>
        </Container >
    )

};

export default MainContent;