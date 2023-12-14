import React from "react";
import './Navbar.css'
import navLogo from '../../assets/nav-logo.png';
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={navLogo} alt="navLogo" className="navLogo" />
      <div className="desktopMenu">
        <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Contact Me</Link>
      </div>
    </nav>
  )
}

export default Navbar