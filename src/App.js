import React from 'react';
import './App.css';
import { Nav } from './components/Nav';
import { Main } from './components/Main';
import { LeftSide } from './components/LeftSide';
import { RightSide } from './components/RightSide';

function App() {
  return (
    <div className="wrapper">
      <Nav />
      <Main />
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default App;
