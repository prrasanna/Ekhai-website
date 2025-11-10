import React from "react";
import "./About.css";
import logo from "../../assets/logo.png";

const About = () => {
  return (
    <section className="about-section">
      <div className="overlay"></div>
      <div className="container about-content text-center">
        
        <div className="about-logo mb-4">
          <img src={logo} alt="Ekhai Business Services" />
        </div>

       
        <h1 className="about-title">
          <span className="highlight">About Us</span>
        </h1>

        
        <p className="about-intro">
          We are a dynamic organization dedicated to providing professional
          solutions in recruitment, legal consulting, and CSR event management.
          With a presence across{" "}
          <strong>
            Andhra Pradesh, Telangana, Tamil Nadu, Kerala,
          </strong>{" "}
          and <strong>Dubai</strong>, we take pride in empowering businesses and
          individuals with excellence.
        </p>

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

        <div className="core-values">
          <h2 className="values-title">💎 Our Core Values</h2>
          <div className="values-container">
            <div className="value-card">
              <h4>Integrity</h4>
              <p>We uphold transparency and honesty in every partnership.</p>
            </div>
            <div className="value-card">
              <h4>Commitment</h4>
              <p>
                Dedicated to delivering quality and timely services for every
                client.
              </p>
            </div>
            <div className="value-card">
              <h4>Innovation</h4>
              <p>Embracing modern strategies to meet evolving business needs.</p>
            </div>
            <div className="value-card">
              <h4>Excellence</h4>
              <p>
                Setting benchmarks in professionalism and service delivery.
              </p>
            </div>
          </div>
        </div>

       
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

        {/* Our Trusted Clients */}
        <section className="trusted-section mt-5">
          <h2 className="trusted-title">
            <span className="highlight">Our Trusted Clients</span>
          </h2>
          <p className="trusted-desc">
            We are proud to work with leading companies across various industries,
            building long-lasting partnerships that drive{" "}
            <strong>mutual success and growth.</strong>
          </p>

          <div className="trusted-cards">
            <div className="trusted-card">
              <h3>100+</h3>
              <p>Satisfied Clients</p>
            </div>
            <div className="trusted-card">
              <h3>80%</h3>
              <p>Repeat Business Rate</p>
            </div>
            <div className="trusted-card">
              <h3>15+</h3>
              <p>Years of Excellence</p>
            </div>
          </div>

          <div className="client-logos">
            <div className="logo-card">TechnoPark</div>
            <div className="logo-card">AlphaCraft</div>
            <div className="logo-card">Gabriel India</div>
            <div className="logo-card">Quantum</div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-section mt-5">
          <h2 className="choose-title">
             <span className="highlight">Why Choose Us</span>
          </h2>
          <p className="choose-desc">
            We bring unmatched expertise, reliability, and innovation to every
            partnership, ensuring exceptional results and lasting success.
          </p>

          <div className="choose-grid">
            <div className="choose-card">💼 15+ Years of Service & Trust</div>
            <div className="choose-card">🌐 Cross-Sector Expertise</div>
            <div className="choose-card">⚙️ Customizable Services</div>
            <div className="choose-card">🌱 Social Responsibility Focus</div>
            <div className="choose-card">🏅 AICTE-Recognized Programs</div>
            <div className="choose-card">🤝 Trusted Partnerships</div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
