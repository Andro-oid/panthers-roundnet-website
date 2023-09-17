import React from "react";
import './Navbar.css';

function Navbar() {

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">About us</a>
        </li>
        <li className="nav-item">
          <a href="/sign" className="nav-link">Sign up</a>
        </li>
      </ul>
    </nav>
  );
}



export default Navbar;
