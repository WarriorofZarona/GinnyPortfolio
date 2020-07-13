import React, { useState } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import { Container, Row } from 'react-bootstrap';
import { images } from './utils/db'

function App() {

  const [gallery, setGallery] = useState([]);

  const fetchGallery = async category => {
    const array = images.filter(image => image.category === category)
    await setGallery(array);
  }

  return (
    <div>
      <TopBar />
      <Container fluid>
        <Row>
          <SideBar
            fetchGallery={fetchGallery}
          />
          <MainContent gallery={gallery} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
