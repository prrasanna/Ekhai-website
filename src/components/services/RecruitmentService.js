import React from "react";
import "./ServiceDetail.css";
import { useNavigate } from "react-router-dom";



const RecruitmentService = () => {
  const navigate = useNavigate();
  return (
    <section className="service-detail-section alt-bg">
      <div className="service-detail-content">
        <h1 className="service-detail-title">Recruitment Services</h1>
        <p className="service-detail-description">
          Finding the right talent is key to success. We connect skilled professionals 
          with top organizations through fast, transparent, and efficient hiring solutions.
        </p>

        <div className="service-detail-3dcard">
          <h3>Our Hiring Expertise</h3>
          <ul>
            <li>Executive & Bulk Hiring</li>
            <li>International Placements (India & Dubai)</li>
            <li>Background Verification</li>
            <li>HR Consulting & Strategy</li>
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

export default RecruitmentService;
