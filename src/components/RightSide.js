import React, { useEffect } from 'react';
import '../RightSide.css';
import gsap from 'gsap';


export const RightSide = () => {
    
    useEffect(() => {
        gsap.to(".right-line", {duration: 1.5, delay: 9, css: {height: "13%", opacity: 1}})
        gsap.to(".l32", {duration: 3, delay: 10.5, css: {opacity: 1}})
        gsap.to(".l31", {duration: 3, delay: 10.55, css: {opacity: 1}})
        gsap.to(".l30", {duration: 3, delay: 10.6, css: {opacity: 1}})
        gsap.to(".l29", {duration: 3, delay: 10.65, css: {opacity: 1}})
        gsap.to(".l28", {duration: 3, delay: 10.7, css: {opacity: 1}})
        gsap.to(".l27", {duration: 3, delay: 10.75, css: {opacity: 1}})
        gsap.to(".l26", {duration: 3, delay: 10.8, css: {opacity: 1}})
        gsap.to(".l25", {duration: 3, delay: 10.85, css: {opacity: 1}})
        gsap.to(".l24", {duration: 3, delay: 10.9, css: {opacity: 1}})
        gsap.to(".l23", {duration: 3, delay: 10.95, css: {opacity: 1}})
        gsap.to(".l22", {duration: 3, delay: 11, css: {opacity: 1}})
        gsap.to(".l21", {duration: 3, delay: 11.05, css: {opacity: 1}})
        gsap.to(".l20", {duration: 3, delay: 11.1, css: {opacity: 1}})
        gsap.to(".l19", {duration: 3, delay: 11.15, css: {opacity: 1}})
        gsap.to(".l18", {duration: 3, delay: 11.2, css: {opacity: 1}})
        gsap.to(".l17", {duration: 3, delay: 11.25, css: {opacity: 1}})
        gsap.to(".l16", {duration: 3, delay: 11.3, css: {opacity: 1}})
        gsap.to(".l15", {duration: 3, delay: 11.35, css: {opacity: 1}})
        gsap.to(".l14", {duration: 3, delay: 11.4, css: {opacity: 1}})
        gsap.to(".l13", {duration: 3, delay: 11.45, css: {opacity: 1}})
        gsap.to(".l12", {duration: 3, delay: 11.5, css: {opacity: 1}})
        gsap.to(".l11", {duration: 3, delay: 11.55, css: {opacity: 1}})
        gsap.to(".l10", {duration: 3, delay: 11.6, css: {opacity: 1}})
        gsap.to(".l9", {duration: 3, delay: 11.65, css: {opacity: 1}})
        gsap.to(".l8", {duration: 3, delay: 11.7, css: {opacity: 1}})
        gsap.to(".l7", {duration: 3, delay: 11.75, css: {opacity: 1}})
        gsap.to(".l6", {duration: 3, delay: 11.8, css: {opacity: 1}})
        gsap.to(".l5", {duration: 3, delay: 11.85, css: {opacity: 1}})
        gsap.to(".l4", {duration: 3, delay: 11.9, css: {opacity: 1}})
        gsap.to(".l3", {duration: 3, delay: 11.95, css: {opacity: 1}})
        gsap.to(".l2", {duration: 3, delay: 12.05, css: {opacity: 1}})
        gsap.to(".l1", {duration: 3, delay: 12.1, css: {opacity: 1}})
    }, [])

    return (
        <div className="right-side">
            {/* <a href="mailto:jesusclementguerrero@gmail.com" className="right-text">jesusclementguerrero@gmail.com</a> */}
            <a href="mailto:jesusclementguerrero@gmail.com" className="right-text">
                <span className="l1">j</span>
                <span className="l2">e</span>
                <span className="l3">s</span>
                <span className="l4">u</span>
                <span className="l5">s</span>
                <span className="l6">c</span>
                <span className="l7">l</span>
                <span className="l8">e</span>
                <span className="l9">m</span>
                <span className="l10">e</span>
                <span className="l11">n</span>
                <span className="l12">t</span>
                <span className="l13">g</span>
                <span className="l14">u</span>
                <span className="l15">e</span>
                <span className="l16">r</span>
                <span className="l17">r</span>
                <span className="l18">e</span>
                <span className="l19">r</span>
                <span className="l20">e</span>
                <span className="l21">r</span>
                <span className="l22">o</span>
                <span className="l23">@</span>
                <span className="l24">g</span>
                <span className="l25">m</span>
                <span className="l26">a</span>
                <span className="l27">i</span>
                <span className="l28">l</span>
                <span className="l29">.</span>
                <span className="l30">c</span>
                <span className="l31">o</span>
                <span className="l32">m</span>
                </a>
            <div className="right-line"></div>
        </div>
    )
}