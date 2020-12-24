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
    gsap.to(".curtain", {duration: 1, delay: .3, backgroundColor: "rgba(255, 255, 255, 0)"})
    gsap.to(".curtain", {duration: .1, delay: 2, display: "none"})
    gsap.to(".main", {duration: 1.5, delay: 2, visibility: "visible"})
  }, [])

  return (
    <div className="wrapper">
      <div className="curtain"></div>
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
