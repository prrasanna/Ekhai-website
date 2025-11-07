import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const NavbarComponent = () => {
  return (
    <nav className="navbar-custom navbar navbar-expand-lg sticky-top">
      <div className="container">
        {/* Brand Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Ekhai Business Services" className="navbar-logo" />
          <span className="brand-text ms-2">EKHAI Business Services</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
