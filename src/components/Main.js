import React, { useEffect } from 'react';
import '../Main.css';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineCodepen } from 'react-icons/ai';
import { FaExternalLinkAlt } from 'react-icons/fa';
import gsap, { Power4 } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Main = () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 2)
    

    useEffect(() => {
        // Intro Section Animations
        gsap.to(".introt1", {duration: .8, delay: 4, fontSize: "1.3rem", /*marginLeft: 0*/ ease: Power4.easeInOut})
        gsap.to(".introt1", {duration: 1.5, delay: 2, opacity: 1})
        gsap.to(".introt2", {duration: 1.5, delay: 4.5, opacity: 1})
        gsap.to(".introt3", {duration: 1.5, delay: 6.5, opacity: 1})
        gsap.to(".introt4", {duration: 1.5, delay: 8, opacity: 1})
        gsap.to(".intro-btn", {duration: 1.5, delay: 9, opacity: 1})
        // About Section Animations
        gsap.to(".about1", {scrollTrigger: {trigger: ".about1", toggleActions: "restart reset restart reset"}, duration: 5, opacity: 1})
        gsap.to(".about2", {scrollTrigger: {trigger: ".about2", toggleActions: "restart reset restart reset"}, duration: 5, opacity: 1})
        gsap.to(".about3", {scrollTrigger: {trigger: ".about3", toggleActions: "restart reset restart reset"}, duration: 5, opacity: 1})
        gsap.to(".about4", {scrollTrigger: {trigger: ".about4", toggleActions: "restart reset restart reset"}, duration: 5, opacity: 1})
        gsap.to(".about5", {scrollTrigger: {trigger: ".about5", toggleActions: "restart reset restart reset"}, duration: 5, opacity: 1})

        // Project Section Animations
        gsap.to(".p1", {scrollTrigger: {trigger: ".p1", toggleActions: "restart none restart none"}, duration: 5, opacity: 1})
        gsap.to(".p2", {scrollTrigger: {trigger: ".p2", toggleActions: "restart none restart none"}, duration: 5, opacity: 1})
        gsap.to(".p3", {scrollTrigger: {trigger: ".p3", toggleActions: "restart none restart none"}, duration: 5, opacity: 1})
        gsap.to(".p4", {scrollTrigger: {trigger: ".p4", toggleActions: "restart none restart none"}, duration: 5, opacity: 1})

        // Contact Section Animations
        gsap.to(".contact1", {scrollTrigger: {trigger: ".contact1", toggleActions: "restart reset restart reset"}, duration: 5, opacity: 1})
        gsap.to(".contact2", {scrollTrigger: {trigger: ".contact2", toggleActions: "restart reset restart reset"}, duration: 5, opacity: 1})
        gsap.to(".contact3", {scrollTrigger: {trigger: ".contact3", toggleActions: "restart reset restart reset"}, duration: 5, opacity: 1})

    }, [])

    return (
        <div className="content">
            <div className="main">
                <section className="intro" id="intro">
                    <h1><span className="introt1">Hi</span><span className="introt2">, my name is</span></h1>
                    <h2><span className="introt2">Jesus Guerrero.</span></h2>
                    <h3 className="introt3">I build things for the web.</h3>
                    <p className="introt4">
                        I'm a software engineer based in Miami, FL specializing in designing and building websites, databases, applications, and everything in between.
                    </p>
                    <a href="mailto:jesusclementguerrero@gmail.com" className="intro-btn">Get In Touch</a>
                </section>

                <section className="about-container" id="about">
                    <div className="about fade">
                        <div className="about-title-box">
                            <h1 className="about-title about1">About Me </h1>
                            <p className="about-line"></p>
                        </div>

                        <p className="about2">
                        {/* A good website works. A great website feels good.<br/> */}
                        I enjoy blending creativity and logic to produce high functioning and innovative designs for my clients.
                        </p>
                        <br/>
                        <p className="about3">
                        In October of 2020, I graduated from the Full-Stack Web Developer program at Lambda School.
                        </p>
                        <br/>
                        <p className="about4">
                        Here are a few technologies I've been working with recently:
                        </p>

                        <ul className="skills-list about5">
                            <li>
                                JS (ES6+)
                            </li>
                            <li>
                                React
                            </li>
                            <li>
                                Node.js
                            </li>
                            <li>
                                HTML & (S)CSS
                            </li>
                            <li>
                                Knex.js
                            </li>
                            <li>
                                Python
                            </li>
                            <li>
                                Redis
                            </li>
                            <li>
                                Plotly
                            </li>
                            <li>
                                AWS
                            </li>
                            <li>
                                Okta
                            </li>
                            <li>
                                GSAP
                            </li>
                            <li>
                                JQuery
                            </li>
                            <li>
                                PostgreSQL
                            </li>
                            <li>
                                SQLite3
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="projects-container" id="projects">
                    <h3 className="projects-title p1">Some Things I've Built</h3>

                    <div className="projects-box">

                        <div className="projects-1 p2">
                            <div className="project-1-photo-container">
                                <img className="project-1-photo" alt="Desktop website for SaverLife budgeting App" src={require('../assets/project-1-2.jpg')} />
                            </div>
                            <div className="project-1-content">
                                <h3>Featured Project</h3>
                                <h2>SaverLife</h2>
                                <p>
                                    A budgeting App that helps users budget their income to save money.
                                    Data-science prediction models visualized via plotly and cached via Redis. 
                                </p>
                                    <div className="project-1-frameworks">
                                    <li>
                                        React.js
                                    </li>
                                    <li>
                                        Node.js
                                    </li>
                                    <li>
                                        Redis
                                    </li>
                                    <li>
                                        Plotly
                                    </li>
                                    <li>
                                        AWS
                                    </li>
                                    <li>
                                        Okta
                                    </li>
                                </div>
                            </div>
                        </div>

                        <div className="projects-2 p3">
                            <div className="project-2-photo-container">
                                <img className="project-2-photo" alt="Desktop website for a Weather App" src={require('../assets/weather.png')} />
                            </div>
                            <div className="project-2-content">
                                <h3>Featured Project</h3>
                                <h2>React Weather</h2>
                                <p>
                                    A simple and modern take on a weather application using react and the openWeather API to display current temperatures.
                                </p>
                                    <div className="project-2-frameworks">
                                    <li>
                                        Knex.js
                                    </li>
                                    <li>
                                        Node.js
                                    </li>
                                    <li>
                                        React.js
                                    </li>
                                </div>
                            </div>
                        </div>

                        <div className="projects-3 p4">
                            <div className="project-3-photo-container">
                                <img className="project-3-photo" alt="Desktop website for Snake Game App" src={require('../assets/project-2-1.jpg')} />
                            </div>
                            <div className="project-3-content">
                                <h3>Featured Project</h3>
                                <h2>React Games</h2>
                                <p>
                                    This app serves as an archive for games I make using React and CSS. I continually add to this project as I build new and more complex programs.
                                </p>
                                <div className="project-3-frameworks">
                                    <li>
                                        React.js
                                    </li>
                                    <li>
                                        CSS
                                    </li>
                                    <li>
                                        Javascript
                                    </li>
                                </div>
                                <div className='project-3-icons'>
                                    <a href="https://jesusreactgames.netlify.app/"><FaExternalLinkAlt className="project-3-icon-link"/></a>
                                    <a href="https://github.com/JesusCGuerrero/reactgames"><AiFillGithub className="project-3-icon-link"/></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="contact-container" id="contact">
                    <div className="contact">
                        <h3 className="contact-title contact1">Get In Touch</h3>
                        <p className="contact2">I'm currently working as a freelance developer, but my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                        <a href="mailto:jesusclementguerrero@gmail.com" className="contact-btn contact3">Say Hello</a>
                    </div>
                </section>

                <section className="footer">
                    <div className="logo-box">
                        <a href="https://github.com/JesusCGuerrero"><AiFillGithub className="icon-githubmobile"/></a>
                        <a href="https://www.linkedin.com/in/jesuscguerrero/"><AiOutlineLinkedin className="icon-linkedinmobile"/></a>
                        <a href="https://codepen.io/JesusGuerrero"><AiOutlineCodepen className="icon-codepenmobile"/></a>
                    </div>
                    <a className="footer-email" href="mailto:jesusclementguerrero@gmail.com">jesusclementguerrero@gmail.com</a>
                </section>
            </div>
        </div>
    )
}