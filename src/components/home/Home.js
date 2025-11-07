import React from "react";
import "./Home.css";
import logo from "../../assets/logo.png";

const Home = () => {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center flex-column text-center position-relative">
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Hero Content */}
      <div className="container text-light hero-content position-relative">

        {/* Logo */}
        <div className="brand-logo mb-3">
          <img
            src={logo}
            alt="Ekhai Business Services"
            className="home-logo"
          />
        </div>

        {/* Title */}
        <h1 className="hero-title">
          <span className="highlight">Ekhai</span> Business Services
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          We provide <span className="typing-text">JOBS</span>
        </p>

        {/* Description */}
        <p className="hero-description">
          Your trusted partner for comprehensive{" "}
          <strong>recruitment, legal, and CSR event organization</strong>{" "}
          services across{" "}
          <span className="highlight">
            <br />
            Andhra Pradesh, Telangana, Tamil Nadu, Kerala, and Dubai.
            <br />
          </span>
        </p>

        {/* Buttons */}
        <div className="hero-buttons mt-4">
          <button className="btn-primary-3d">Get Started Today</button>
          <button className="btn-secondary-3d ms-3">Learn More</button>
        </div>

        {/* Trusted Section */}
        <div className="trusted mt-5">
          <p className="trusted-text">
            TRUSTED BY INDUSTRY LEADERS <br />
            <span className="stats">100+ Clients ⭐ 50+ Reviews</span>
          </p>
        </div>

        {/* Stats Cards */}
        <div className="stats-cards d-flex justify-content-center mt-5 flex-wrap">
          <div className="glass-card">
            <h2>5+</h2>
            <p>States</p>
            <small>
              Serving across Andhra Pradesh, Telangana, Tamil Nadu, Kerala, and
              Dubai with excellence.
            </small>
          </div>

          <div className="glass-card">
            <h2>100+</h2>
            <p>Projects</p>
            <small>
              Successfully completed recruitment drives and CSR events with
              measurable impact.
            </small>
          </div>

          <div className="glass-card">
            <h2>24/7</h2>
            <p>Support</p>
            <small>
              Round-the-clock comprehensive support for all your business
              solution needs.
            </small>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="why-choose-us mt-5">
          <h5>Why Choose Us?</h5>
          <ul className="list-unstyled">
            <li>✅ Multi-state operations</li>
            <li>✅ 24/7 dedicated support</li>
            <li>✅ Proven track record</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Home;
