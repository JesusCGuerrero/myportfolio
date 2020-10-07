import React from 'react';
import '../LeftSide.css';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineCodepen } from 'react-icons/ai';

export const LeftSide = () => {
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