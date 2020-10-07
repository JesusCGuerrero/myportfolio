import React from 'react';
import '../Main.css';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineCodepen } from 'react-icons/ai';

export const Main = () => {
    return (
        <div className="content">
            <div className="main">
                <section className="intro" id="intro">
                    <h1>Hi, my name is</h1>
                    <h2>Jesus Guerrero.</h2>
                    <h3>I build things for the web.</h3>
                    <p>
                        I'm a software engineer based in Miami, FL specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.
                    </p>
                    <a href="mailto:jesusclementguerrero@gmail.com" className="intro-btn">Get In Touch</a>
                </section>

                <section className="about-container" id="about">
                    <div className="about">
                        <div className="about-title-box">
                            <h1 className="about-title">About Me </h1>
                            <p className="about-line"></p>
                        </div>

                        <p>
                        I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
                        </p>
                        <br/>
                        <p>
                        In October of 2020, I graduated from Lambda School as a Full-Stack Web Developer.
                        </p>
                        <br/>
                        <p>
                        Here are a few technologies I've been working with recently:
                        </p>

                        <ul className="skills-list">
                            <li>
                                JavaScript (ES6+)
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
                        </ul>
                    </div>
                </section>

                <section className="projects-container" id="projects">
                    <h3 className="projects-title">Some Things I've Built</h3>

                    <div className="projects-box">

                        <div className="projects-1">
                            <div className="project-1-photo-container">
                                <img className="project-1-photo" src={require('../assets/project-1-2.jpg')} />
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

                        <div className="projects-2">
                            <div className="project-2-photo-container">
                                <img className="project-2-photo" src={require('../assets/weather.png')} />
                            </div>
                            <div className="project-2-content">
                                <h3>Featured Project</h3>
                                <h2>React Weather</h2>
                                <p>
                                    A simple and modern take on a weather app using react and the openWeather API to display current temperatures and is capable of forcasts 5 days ahead and is mobile friendly!
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

                        <div className="projects-3">
                            <div className="project-3-photo-container">
                                <img className="project-3-photo" src={require('../assets/snake.png')} />
                            </div>
                            <div className="project-3-content">
                                <h3>Featured Project</h3>
                                <h2>React Snake</h2>
                                <p>
                                    A fun mini-project using both React and CSS to make this re-take on the classic Snake. This project was a ton of fun and could easily be expanded upon to show local high-scores for example.
                                </p>
                                    <div className="project-3-frameworks">
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

                    </div>
                </section>

                <section className="contact-container" id="contact">
                    <div className="contact">
                        <h3 className="contact-title">Get In Touch</h3>
                        <p>I'm currently working as a freelance developer, but my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                        <a href="mailto:jesusclementguerrero@gmail.com" className="contact-btn">Say Hello</a>
                    </div>
                </section>

                <section className="footer">
                    <div className="logo-box">
                        <a target="_blank" href="https://github.com/JesusCGuerrero"><AiFillGithub className="icon-githubmobile"/></a>
                        <a target="_blank" href="https://www.linkedin.com/in/jesuscguerrero/"><AiOutlineLinkedin className="icon-linkedinmobile"/></a>
                        <a target="_blank" href="https://codepen.io/JesusGuerrero"><AiOutlineCodepen className="icon-codepenmobile"/></a>
                    </div>
                    <a className="footer-email" href="mailto:jesusclementguerrero@gmail.com">jesusclementguerrero@gmail.com</a>
                </section>
            </div>
        </div>
    )
}