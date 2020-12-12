import React, { useEffect } from 'react';
import './App.css';
import { Nav } from './components/Nav';
import { Main } from './components/Main';
import { LeftSide } from './components/LeftSide';
import { RightSide } from './components/RightSide';
import { Logo } from './components/Logo';
import gsap from "gsap";


function App() {

  useEffect(() => {
    gsap.from("body", {duration: 1, delay: 1, backgroundColor: "#e7e7e7"})
    gsap.to(".main", {duration: 1.5, delay: 2, visibility: "visible"})
  }, [])

  return (
    <div className="wrapper">
      <div className="startup">
        <Logo />
      </div>
      <div className="main">
        <Nav />
        <Main />
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
