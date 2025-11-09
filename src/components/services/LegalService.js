import React from "react";
import "./ServiceDetail.css";
import { useNavigate } from "react-router-dom";



const LegalService = () => {
  const navigate = useNavigate();
  return (
    <section className="service-detail-section alt-bg">
      <div className="service-detail-content">
        <h1 className="service-detail-title">Legal Services</h1>
        <p className="service-detail-description">
          We provide comprehensive legal support for businesses — ensuring your 
          operations are compliant, secure, and risk-free. Our team simplifies the legal process 
          for startups and enterprises alike.
        </p>

        <div className="service-detail-3dcard">
          <h3>Legal Support Includes</h3>
          <ul>
            <li>Business Registration & Compliance</li>
            <li>Contract Drafting & Review</li>
            <li>Corporate Law & Advisory</li>
            <li>Trademark & IP Protection</li>
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

export default LegalService;
