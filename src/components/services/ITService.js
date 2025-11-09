import React, { useEffect } from "react";
import "./ServiceDetail.css";
import { useNavigate } from "react-router-dom";

const ITService = () => {
  const navigate = useNavigate();
  // Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="service-detail-section">
      <div className="service-detail-content animate-fade-in">
        {/* Title */}
        <h1 className="service-detail-title glow-text">💻 IT Services</h1>

        {/* Description */}
        <p className="service-detail-description">
          Empower your business with cutting-edge technology solutions. 
          Our IT services cover full-stack development, cloud deployment, 
          automation, and digital transformation — helping your brand stay 
          ahead in the ever-evolving tech landscape.
        </p>

        {/* 3D Expertise Card */}
        <div className="service-detail-3dcard">
          <h3>Our Expertise</h3>
          <ul>
            <li>Custom Web & Mobile App Development</li>
            <li>Cloud Setup & Maintenance</li>
            <li>UI/UX Design & Product Prototyping</li>
            <li>AI & Automation Integration</li>
          </ul>
        </div>
        <div className="back-btn-container">
          <button 
            className="back-to-services-btn"
            onClick={() => navigate("/services")}
          >
            ← Back to Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ITService;
