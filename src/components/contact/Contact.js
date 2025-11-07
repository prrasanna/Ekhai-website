import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-header text-center">
        <h1 className="services-title">
           <span className="highlight">Get in Touch</span>
        </h1>
        <p className="contact-subtitle">
          We’re here to help you grow your business with innovative solutions and expert guidance.
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="contact-container">
        {/* Left: Contact Info */}
        <div className="contact-info">
          <div className="info-card">
            <FaPhoneAlt className="info-icon" />
            <h4>Phone</h4>
            <p>+91 98765 43210</p>
          </div>
          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <h4>Email</h4>
            <p>info@ekhai.org</p>
          </div>
          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <h4>Office</h4>
            <p>Hyderabad, Telangana, India</p>
          </div>
          <a
            href="https://wa.me/919876543210"
            className="btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-send">Send Message</button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <h3 className="map-title">Find Us</h3>
        <iframe
          title="Ekhai Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.812441574911!2d77.4655!3d8.2939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f1a96b511adf%3A0x8a5c2d3d3f03f7a!2sMarthandam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1663249200000!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: "0", borderRadius: "15px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h3 className="faq-title">Frequently Asked Questions</h3>
        <p className="faq-subtitle">
          Find answers to common inquiries about our services
        </p>

        <div className="faq-grid">
          <div className="faq-card">
            <h5>What is EKHAI Foundation?</h5>
            <p>
              EKHAI Foundation is a leading force in CSR, addressing healthcare
              challenges and promoting sustainable development.
            </p>
          </div>
          <div className="faq-card">
            <h5>Who can benefit from EKHAI Foundation’s initiatives?</h5>
            <p>
              EKHAI Foundation serves marginalized and underprivileged sections
              of society, irrespective of caste, creed, or origin.
            </p>
          </div>
          <div className="faq-card">
            <h5>What are the benefits of supporting EKHAI Foundation?</h5>
            <p>
              Supporting EKHAI Foundation enhances brand reputation, fosters
              CSR engagement, and builds stronger communities.
            </p>
          </div>
          <div className="faq-card">
            <h5>Are donations to EKHAI Foundation tax-deductible?</h5>
            <p>
              Yes, donations made to EKHAI Foundation are eligible for Income
              Tax deductions as per government regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
