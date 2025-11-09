import React from "react";
import "./ServiceDetail.css";
import { useNavigate } from "react-router-dom";


const SouvenirService = () => {
  const navigate = useNavigate();
  return (
    <section className="service-detail-section alt-bg">
      <div className="service-detail-content">
        <h1 className="service-detail-title">Souvenir Services</h1>
        <p className="service-detail-description">
          Celebrate moments that matter with customized souvenirs. 
          We design and deliver creative gifts for events, corporate promotions, and milestones.
        </p>

        <div className="service-detail-3dcard">
          <h3>Souvenir Solutions</h3>
          <ul>
            <li>Corporate Event Gifts</li>
            <li>Employee Recognition Awards</li>
            <li>Custom Merchandise & Branding</li>
            <li>Eco-friendly Souvenir Options</li>
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

export default SouvenirService;
