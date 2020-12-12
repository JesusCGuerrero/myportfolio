import React, { useEffect } from 'react';
import '../Nav.css';
import { gsap } from "gsap";

export const Nav = () => {

    useEffect(() => {

        // Logo Animations
        gsap.from(".nav-logo", {duration: 1, delay: 1, opacity: 0, position: "relative", right: "5%"})

        //Nav Right Side Animations
        gsap.from(".n4", {duration: 1.5, delay: .2, opacity: 0})
        gsap.from(".n3", {duration: 3, delay: .4, opacity: 0})
        gsap.from(".n2", {duration: 3, delay: .6, opacity: 0})
        gsap.from(".n1", {duration: 3, delay: .8, opacity: 0})
        gsap.from("path", {duration: 1, drawSVG: "0%"})

    }, [])

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("nav").classList.add("moving-nav")
            document.getElementById("nav").classList.remove("nav")
        } else {
            document.getElementById("nav").classList.remove("moving-nav")
            document.getElementById("nav").classList.add("nav")
        }
    }

    return (
        <div className="nav" id="nav">
            
            <div className="nav-logo">
                <a href="/#intro">
                    <svg className="svg-logo" width="126" height="221" viewBox="0 0 126 221" fill="none" xmlns="http://www.w3.org/2000/svg">
	                    <path id="path" d="M125 16.5C125 25.0604 118.06 32 109.5 32C100.94 32 94 25.0604 94 16.5C94 7.93959 100.94 1 109.5 1C118.06 1 125 7.93959 125 16.5Z" stroke="#2CFFC0" stroke-width="2"/>
	                    <path d="M87.2319 69.7358L87.2393 69.7461L87.2469 69.7563C93.2632 77.778 96.3281 88.7916 96.3281 102.906C96.3281 116.067 93.3636 127.019 87.4961 135.82L87.4934 135.824C81.9001 144.305 73.1529 148.594 61.0469 148.594C49.8936 148.594 41.4962 144.501 35.7056 136.358C29.8664 128.147 26.8906 116.844 26.8906 102.344C26.8906 87.1558 29.6912 75.9462 35.1334 68.5538C40.5336 61.2186 48.6417 57.5 59.6406 57.5C72.3449 57.5 81.4664 61.6281 87.2319 69.7358ZM81.7441 161.176C88.1242 157.986 93.0873 154.036 96.5855 149.31C96.3072 168.658 93.5967 182.099 88.6125 189.833L88.6072 189.842C83.3845 198.126 75.1111 202.312 63.5781 202.312C55.3106 202.312 48.1971 200.294 42.1953 196.293C36.305 192.366 33.3594 186.689 33.3594 179.125V178.125H32.3594H9.01562H8.01562V179.125C8.01562 182.827 8.7947 186.696 10.3286 190.724C11.8703 194.961 14.3618 199.357 17.7781 203.913C21.2917 208.597 26.6164 212.347 33.6655 215.206C40.9394 218.267 49.5127 219.781 59.3594 219.781C78.8582 219.781 94.1405 214.381 105.064 203.46C115.963 192.75 121.391 178.889 121.391 161.969V43.8438V42.8438H120.391H97.6094H96.6094V43.8438V54.2667C89.2985 44.4761 75.4164 39.75 55.4219 39.75C39.5725 39.75 26.6325 45.6867 16.6869 57.5449C6.76043 69.3803 1.82812 84.3392 1.82812 102.344C1.82812 123.661 6.6362 139.792 16.4325 150.548L16.4391 150.555C26.4184 161.302 40.3026 166.625 57.9531 166.625C66.1685 166.625 74.096 164.809 81.7259 161.185L81.7351 161.18L81.7441 161.176Z" stroke="#2CFFC0" stroke-width="2"/>
                    </svg>
                </a>

            </div>
            <div className="nav-menu">
                <ol>
                    <li className="nav-menu-item">
                        <a className="n1" href="/#about">About</a>
                    </li>
                    <li className="nav-menu-item">
                        <a className="n2" href="/#projects">Projects</a>
                    </li>
                    <li className="nav-menu-item">
                        <a className="n3" href="/#contact">Contact</a>
                    </li>
                </ol>
                <a href="/resume.pdf" target="_blank" 
                className="resume-btn n4">Resume</a>
            </div>
        </div>
    )
}