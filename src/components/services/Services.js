import React from "react";
import "./Services.css";
import {
  FaLaptopCode,
  FaGavel,
  FaHandsHelping,
  FaUserTie,
  FaBriefcase,
  FaGift,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "IT Services",
      icon: <FaLaptopCode />,
      description:
        "From software development to digital infrastructure, we provide innovative IT solutions to help your business stay ahead in a rapidly evolving tech landscape.",
      path: "/services/it",
    },
    {
      title: "Legal Services",
      icon: <FaGavel />,
      description:
        "Our legal experts offer professional guidance on business registrations, contracts, compliance, and corporate legalities to safeguard your enterprise.",
      path: "/services/legal",
    },
    {
      title: "CSR Event Planners",
      icon: <FaHandsHelping />,
      description:
        "We plan and execute Corporate Social Responsibility events that make a real difference — from community outreach to sustainability initiatives.",
      path: "/services/csr",
    },
    {
      title: "Recruitment",
      icon: <FaUserTie />,
      description:
        "Connecting businesses with skilled professionals through efficient, transparent, and fast recruitment processes across India and Dubai.",
      path: "/services/recruitment",
    },
    {
      title: "Careers",
      icon: <FaBriefcase />,
      description:
        "Explore exciting opportunities with leading companies. We help candidates grow their careers through trusted partnerships and expert guidance.",
      path: "/services/careers",
    },
    {
      title: "Souvenir",
      icon: <FaGift />,
      description:
        "Create memorable keepsakes for your company events, promotions, or celebrations with our creative and customized souvenir solutions.",
      path: "/services/souvenir",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-header text-center">
        <h1 className="services-title">
          <span className="highlight">Our Services</span>
        </h1>
        <p className="services-subtitle">
          Empowering businesses through excellence, innovation, and trust.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <button
              className="learn-more-btn"
              onClick={() => navigate(service.path)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
