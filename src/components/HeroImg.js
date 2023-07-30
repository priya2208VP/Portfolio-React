import "./HeroImgStyle.css";
import React from 'react'
import IntroImg from "../asset/INT.webp"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
         <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Hello EVERYONE ! I'M PRIYA</p>
            <h1>A PASSIONATE WEB DEVELOPER.</h1>
            <p>WITH EXPERTISE IN UI/UX Designing</p>
            <br></br><br></br>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg