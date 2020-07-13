import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import { Container, Row } from 'react-bootstrap'

function App() {
  return (
    <div>
      <TopBar />
      <Container fluid>
        <Row>
          <SideBar />
          <MainContent />
        </Row>
      </Container>
    </div>
  );
}

export default App;
