import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-glow"></div>

      <div className="footer-container">
        {/* Left Column */}
        <div className="footer-about">
          <h2 className="footer-title">
            <span className="highlight">Ekhai</span> Business Services
          </h2>
          <p className="footer-desc">
            Your trusted partner for comprehensive recruitment, legal, and CSR
            event organization services across multiple regions with over a
            decade of excellence.
          </p>
          <div className="footer-tags">
            <span>15+ Years Experience</span>
            <span>80% Repeat Business</span>
            <span>Multi-State Operations</span>
          </div>
        </div>

        {/* Middle Column */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p><FaMapMarkerAlt className="footer-icon" /> <b>Headquarters:</b> Kanyakumari</p>
          <p><FaPhoneAlt className="footer-icon" /> <b>Service Areas:</b> Andhra Pradesh, Telangana, Tamil Nadu, Kerala, Dubai</p>
          <p><FaBriefcase className="footer-icon" /> <b>Business Focus:</b> Recruitment & Legal Services, CSR Event Organization</p>
        </div>
      </div>

      {/* Core Services Box */}
      <div className="footer-core">
        <h4>Our Core Services</h4>
        <div className="core-tags">
          <span>IT & Engineering Recruitment</span>
          <span>Manufacturing Services</span>
          <span>Legal Consultation</span>
          <span>CSR Event Management</span>
          <span>Internship Programs</span>
          <span>Business Consulting</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 Ekhai Business Services. All rights reserved.</p>
        <div className="footer-meta">
          <span>Trusted by 100+ clients</span>
          <span>ISO Certified</span>
          <span>AICTE Recognized</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
