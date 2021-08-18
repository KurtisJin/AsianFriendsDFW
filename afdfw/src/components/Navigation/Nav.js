import React from 'react';
import {Animated} from "react-animated-css";


let Navbar = () => {
    return (
        <nav className="navbar">
            <div className="max-width">
                <Animated enter="bounceIn" animate={true} durationEnter={1000} component="div" >
                <div className="logo"><a href="#">Asian<span> Friends</span> of DFW</a></div>
                </Animated>
                <ul className="menu">
                    <li><a href="#home" className="menu-btn">Home</a></li>
                    <li><a href="#about" className="menu-btn">About</a></li>
                    <li><a href="#events" className="menu-btn">Events</a></li>
                    <li><a href="#services" className="menu-btn">Services</a></li>
                    <li><a href="#photos" className="menu-btn">Photos</a></li>
                    <li><a href="#contact" className="menu-btn">Contact Us</a></li>
                </ul>
            </div>
            <div className="menu-btn">
                <i className="fas fa-bars"></i>
            </div>  
        </nav>
    );
}

export default Navbar; 