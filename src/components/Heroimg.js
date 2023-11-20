import "./Heroimg.css";
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
           <img className="intro-img" src={IntroImg} alt="IntroImg"/> 
        </div>
        <div className="content">
            <p>HI, I'M A FRONTEND DEVELOPER</p>
            <h1>Web Developer</h1>
            <div>
                <Link to="/project" className="btn">PROJECT</Link>
                <Link to="/contact" className="btn btn-light">CONTACT</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg