import React, { useState, useContext } from 'react';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { images } from '../../utils/db.js';
import GalleryContext from '../../utils/GalleryContext'

function MainContent() {

    const gallery = useContext(GalleryContext)

    const [image, setImage] = useState({
        src: images[7].src,
        orientation: images[7].orientation,
        category: images[7].category,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a neque lectus. Nunc euismod velit convallis, hendrerit enim quis, porttitor est. Aliquam et luctus metus. Morbi in tristique lorem. Maecenas ullamcorper quam lectus, id molestie nunc tincidunt quis. Nulla facilisi. Maecenas vitae vehicula diam, eu fermentum nunc. Aliquam erat volutpat."
    });

    const handleOnHover = id => {
        const selectedImg = images.filter(image => image.id === id)
        console.log(selectedImg[0]);
        setImage(selectedImg[0]);
    }

    const rows = gallery.reduce(function (rows, key, index) {
        return (index % 2 == 0 ? rows.push([key])
            : rows[rows.length - 1].push(key)) && rows;
    }, []);

    console.log(rows);

    return (
        <Col>
            <Container fluid className="gallery">
                <Row>
                    <Col lg={3} id="thumbnail">
                        <Container>
                            {!gallery ? <h1>Nothing here!</h1> :
                                rows.map(row => (
                                    <Row id>
                                        {row.map(col => (<Col key={col.id}><img src={col.thumbnail} onMouseEnter={() => handleOnHover(col.id)} /></Col>))}
                                    </Row>
                                ))
                            }
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
        </Col >
    )

};

export default MainContent;