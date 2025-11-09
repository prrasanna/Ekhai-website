import React from "react";
import "./ServiceDetail.css";
import { useNavigate } from "react-router-dom";


const CSRService = () => {
  const navigate = useNavigate();
  return (
    <section className="service-detail-section">
      <div className="service-detail-content">
        <h1 className="service-detail-title">CSR Event Planners</h1>
        <p className="service-detail-description">
          We design impactful Corporate Social Responsibility programs that strengthen 
          your brand image and create meaningful community impact.
        </p>

        <div className="service-detail-3dcard">
          <h3>We Organize</h3>
          <ul>
            <li>Environmental Awareness Campaigns</li>
            <li>Educational & Health Initiatives</li>
            <li>Charity & Fundraising Events</li>
            <li>Sustainability & Eco Drives</li>
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

export default CSRService;
