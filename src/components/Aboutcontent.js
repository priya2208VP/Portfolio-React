import { Link } from "react-router-dom"
import "./AboutcontentStyle.css"
import React from 'react'
import tourist1 from "../asset/tourist1.png"
import hotel12 from "../asset/hotel12.png"
const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>"As an innovative, creative, and dedicated
UI/UX and Frontend developer, I am
seeking a developer position that will allow
me to utilize my skills and abilities to their
fullest potential."</p>
            <Link to="/contact">
                <button className="btn">Contact</button></Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={tourist1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={hotel12} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutcontent