import React, { useState } from 'react';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { images } from '../../utils/db.js';

function MainContent(props) {

    const gallery = props.gallery;

    const [image, setImage] = useState({
        src: images[8].src,
        orientation: images[8].orientation,
        category: images[8].category,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a neque lectus. Nunc euismod velit convallis, hendrerit enim quis, porttitor est. Aliquam et luctus metus. Morbi in tristique lorem. Maecenas ullamcorper quam lectus, id molestie nunc tincidunt quis. Nulla facilisi. Maecenas vitae vehicula diam, eu fermentum nunc. Aliquam erat volutpat."
    });

    return (
        <Col>
            <Container fluid className="gallery">
                <Row>
                    <Col lg={3}>
                        <Container id="graphic-design">
                            {/* <Row>
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
                            </Row> */}
                            {gallery.reduce(
                                function (accumulator, currentValue, currentIndex, array) {
                                    if (currentIndex % 2 === 0)
                                        accumulator.push(array.slice(currentIndex, currentIndex + 2));
                                    return accumulator;
                                }, []).map(p => (console.log(p[0], p[1])))}

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
        </Col>
    )

};

export default MainContent;