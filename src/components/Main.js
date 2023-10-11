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
                        I'm a software engineer based in Broken Arrow, OK specializing in ecommerce platform integrations. I also work in general web and database development.
                        <br/><br/>
                         I am currently working as a Senior Solutions Engineer at Extend Inc and am currently our teams SME for Shopify, but I also work with other ecommerce platforms such as BigCommerce, WooCommerce and custom API solutions.
                         <br/>
                        I work in a B2B landscape, often in conjuction with development teams of our clients. Thanks to this, I get to meet a lot of great developers and work with differing tech stacks, meaning I often need to employ differing solutions.
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
                        <br/>
                        I worked as a freelance developer until August 2021,
                        when I accepted an offer as a Solutions Engineer I at Extend Inc.
                        In July 2022 I was promoted to Solutions Engineer II,
                        then in March 2023 I was promoted to Senior Solutions Engineer.
                        </p>
                        <br/>
                        <p className="about4">
                        Here are a few technologies I've been working with recently:
                        </p>

                        <ul className="skills-list about5">
                            <li>
                                Javascript
                            </li>
                            <li>
                                Shopify
                            </li>
                            <li>
                                BigCommerce
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
                                Salesforce Commerce Cloud
                            </li>
                            <li>
                                WooCommerce
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
                                <img className="project-1-photo" alt="Desktop website for SaverLife budgeting App" src={require('../assets/nzxt.png')} />
                            </div>
                            <div className="project-1-content">
                                <h3>Featured Project</h3>
                                <h2><a style={{textDecoration: "none", color: "white"}} target="_blank" href='https://nzxt.com/'>NZXT Product Protection</a></h2>
                                <p>
                                    Integrated Extend offers onto a headless Shopify website using React, Typescript, a custom PIMS and many other complicating factors.<br/>
                                    This was a several month long project with many stages and launches. It was a great learning experience and I got to meet a great team at NZXT whom I stil work on updates with today. 
                                </p>
                                <div className="project-1-frameworks">
                                    <li>
                                        React
                                    </li>
                                    <li>
                                        Typescript
                                    </li>
                                    <li>
                                        Maxify
                                    </li>
                                    <li>
                                        Next
                                    </li>
                                    <li>
                                        Vercel
                                    </li>
                                    <li>
                                        Shopify
                                    </li>
                                </div>
                            </div>
                        </div>

                        <div className="projects-2 p3">
                            <div className="project-2-photo-container">
                                <img className="project-2-photo" alt="Desktop website for SaverLife budgeting App" src={require('../assets/project-1-2.jpg')} />
                            </div>
                            <div className="project-2-content">
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
                    </div>
                </section>

                <section className="contact-container" id="contact">
                    <div className="contact">
                        <h3 className="contact-title contact1">Get In Touch</h3>
                        <p className="contact2">I'm currently working as a Senior Solutions Engineer at Extend, but my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
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
