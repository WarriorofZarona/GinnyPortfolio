import React, { useState, useEffect } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import { Container, Row } from 'react-bootstrap';
import { images } from './utils/db'
import GalleryContext from './utils/GalleryContext'

function App() {

  const [gallery, setGallery] = useState([]);

  useEffect(() => fetchGallery('digital artwork'), []);

  const fetchGallery = category => {
    const array = images.filter(image => image.category === category)
    setGallery(array);
  }

  return (
    <div>
      <TopBar />
      <Container fluid>
        <Row>
          <SideBar
            fetchGallery={fetchGallery}
          />
          <GalleryContext.Provider value={gallery}>
            <MainContent />
          </GalleryContext.Provider>
        </Row>
      </Container>
    </div>
  );
}

export default App;
