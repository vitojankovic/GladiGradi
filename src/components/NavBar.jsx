import React from 'react'
import '../styles/style.css'
import Twitter from '../images/twitter.svg'
import Instagram from '../images/instagram.svg'
import Facebook from '../images/facebook.svg'
import Logo from '../images/logo.svg'
import { Link } from "react-router-dom";
import { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export default function NavBar() {

  const menu = useRef();

  
  const [isActive, setActive] = useState("false");

  const [display, setDisplay] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive); 
  };

  const hide = () => {
    setDisplay("false");
  }

  const ToggleDisplay = () => {
    setDisplay(!display);
  }

  return (
    <>
    <Navbar className="navbar">
      <Link className="navbar-title" to="/">
        <img className="navbar-title" height="51.2" alt="logo-navbar" src={Logo}/>
      </Link>

      <span className="inner-flex">
        <Link className="link" to="/Properties">
          <p>
          Properties
          </p>
        </Link>
        <Link className="link" to="/About">
          <p>
          About
          </p>
        </Link>
        <Link className="link" to="/Contact">
          <p>
          Contact
          </p>
        </Link>
      </span>

      <div className="nav-icons">
        <img src={Instagram} width="30" height="30"  alt="social-media-link-instagram" className="icon" />
        <img src={Twitter} width="30" height="30"  alt="social-media-link-twitter" className="icon" />
        <img src={Facebook}  width="30" height="30" alt="social-media-link-facebook" className="icon" />
      </div>

    </Navbar>
    
     <Navbar className="navbar-mobile">
      <button className={display ? "nav-button2" : "nav-button2 change"} onClick={ToggleDisplay} ref={menu}>
          <div className={display ? "bar1 change" : "bar1"}></div>
          <div className={display ? "bar2 change" : "bar2"}></div>
          <div className={display ? "bar3 change" : "bar3 change"}></div>
        </button>
        <Link className="navbar-title" to="/">
        <img className="navbar-title" height="51.2" alt="logo-navbar" src={Logo}/>
      </Link>
   </Navbar>

   <Nav className={display ? "navigation-display" : "navigation-display-true"}>
        <Link onCLick={hide} className="link" to="/Properties">
          <p>
          Properties
          </p>
        </Link>
        <Link onCLick={hide} className="link" to="About">
          <p>
          About
          </p>
        </Link>
        <Link onCLick={hide} className="link" to="Contact">
          <p>
          Contact
          </p>
        </Link>
   </Nav>
   </>
  )
}
