import React from "react";
import "./ServiceDetail.css";
import { useNavigate } from "react-router-dom";


const CareerService = () => {
  const navigate = useNavigate();
  return (
    <section className="service-detail-section">
      <div className="service-detail-content">
        <h1 className="service-detail-title">Career Guidance</h1>
        <p className="service-detail-description">
          Unlock your professional growth with our career development programs. 
          From resume building to interview prep, we help you shine in the job market.
        </p>

        <div className="service-detail-3dcard">
          <h3>Career Support Includes</h3>
          <ul>
            <li>Resume & Portfolio Enhancement</li>
            <li>Skill Development Workshops</li>
            <li>Internship & Mentorship Programs</li>
            <li>Personal Career Counselling</li>
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

export default CareerService;
