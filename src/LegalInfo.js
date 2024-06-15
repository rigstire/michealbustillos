// LegalInfo.js
import React from 'react';
import './LegalInfo.css';

function LegalInfo() {
  return (
    <div className="legal-info-container">
      <div className="legal-info-padding">
        <div className="legal-info-content">
          <div className="advertisement top-left">
            <h3>First Consultation Free</h3>
            <p>Contact us today to schedule your first consultation for free and get the legal advice you need.</p>
            <button className="contact-button">Contact Us</button>
          </div>
          <div className="advertisement bottom-right">
            <h3>Expert Legal Advice</h3>
            <p>Providing professional and trustworthy legal services to protect your assets and interests.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalInfo;
