import React from "react";
import "./About.css";
import logo from "../../assets/logo.png";

const About = () => {
  return (
    <section className="about-section">
      <div className="overlay"></div>
      <div className="container about-content text-center">
        {/* Logo */}
        <div className="about-logo mb-4">
          <img src={logo} alt="Ekhai Business Services" />
        </div>

        {/* Title */}
        <h1 className="about-title">
           <span className="highlight">About Us</span>
        </h1>

        {/* Intro paragraph */}
        <p className="about-intro">
          We are a dynamic organization dedicated to providing professional
          solutions in recruitment, legal consulting, and CSR event management.
          With a presence across <strong>Andhra Pradesh, Telangana, Tamil Nadu, Kerala,</strong> and <strong>Dubai</strong>,
          we take pride in empowering businesses and individuals with excellence.
        </p>

        {/* Mission & Vision Section */}
        <div className="about-grid">
          <div className="about-card">
            <h3>🎯 Our Mission</h3>
            <p>
              To empower organizations with efficient, ethical, and customized
              manpower and business solutions that drive measurable success.
            </p>
          </div>

          <div className="about-card">
            <h3>🚀 Our Vision</h3>
            <p>
              To become a leading business service provider recognized for trust,
              innovation, and excellence across industries and geographies.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="core-values">
          <h2 className="values-title">💎 Our Core Values</h2>
          <div className="values-container">
            <div className="value-card">
              <h4>Integrity</h4>
              <p>We uphold transparency and honesty in every partnership.</p>
            </div>
            <div className="value-card">
              <h4>Commitment</h4>
              <p>Dedicated to delivering quality and timely services for every client.</p>
            </div>
            <div className="value-card">
              <h4>Innovation</h4>
              <p>Embracing modern strategies to meet evolving business needs.</p>
            </div>
            <div className="value-card">
              <h4>Excellence</h4>
              <p>Setting benchmarks in professionalism and service delivery.</p>
            </div>
          </div>
        </div>

        {/* Floating Info */}
        <div className="about-stats">
          <div className="stat-box">
            <h3>100+</h3>
            <p>Clients Served</p>
          </div>
          <div className="stat-box">
            <h3>5+</h3>
            <p>States Covered</p>
          </div>
          <div className="stat-box">
            <h3>50+</h3>
            <p>CSR Events Organized</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
