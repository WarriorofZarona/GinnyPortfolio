import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div>
      <TopBar />
      <SideBar />
      <MainContent />
    </div>
  );
}

export default App;
