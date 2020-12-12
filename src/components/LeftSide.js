import React, { useEffect } from 'react';
import '../LeftSide.css';
import gsap from 'gsap';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineCodepen } from 'react-icons/ai';

export const LeftSide = () => {

    useEffect(() => {
        gsap.to(".left-line", {duration: 1.5, delay: 6, css: {height: "13%", opacity: 1}})
        gsap.to(".icon-codepen", {duration: 3, delay: 7, css: {opacity: 1}})
        gsap.to(".icon-linkedin", {duration: 3, delay: 7.5, css: {opacity: 1}})
        gsap.to(".icon-github", {duration: 3, delay: 8, css: {opacity: 1}})
    }, [])

    return (
        <div className="left-side">
            <div className="icon-box">
                <a href="https://github.com/JesusCGuerrero"><AiFillGithub className="icon-github"/></a>
                <a href="https://www.linkedin.com/in/JesusCGuerrero"><AiOutlineLinkedin className="icon-linkedin"/></a>
                <a href="https://codepen.io/JesusGuerrero"><AiOutlineCodepen className="icon-codepen"/></a>
            </div>
            <div className="left-line"></div>
        </div>
    )
}