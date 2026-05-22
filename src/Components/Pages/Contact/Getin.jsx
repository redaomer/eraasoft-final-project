import React from "react";
import "./Getin.css";

const Getin = () => {
  return (
    <section className="getin-section dark-theme">
      <div className="getin-header">
        <h2 className="getin-title">Get in Touch</h2>
        <p className="getin-subtitle">Have a question or want to work with us? Fill out the form and we'll reply soon.</p>
      </div>
      <div className="getin-container">
        <div className="getin-info contact-card">
          <form className="contact-form" autoComplete="off">
            <div className="form-group">
              <input type="text" id="name" className="input" placeholder=" " required />
              <label htmlFor="name" className="floating">Full Name</label>
            </div>
            <div className="form-group">
              <input type="email" id="email" className="input" placeholder=" " required />
              <label htmlFor="email" className="floating">Email Address</label>
            </div>
            <div className="form-group">
              <textarea id="message" className="input textarea" placeholder=" " rows={5} required />
              <label htmlFor="message" className="floating">Message</label>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
        <div className="getin-map contact-card">
          <h3 className="contact-card-title">Contact Information</h3>
          <div className="info-item"><span className="icon">📍</span> 123 Street, City</div>
          <div className="info-item"><span className="icon">✉️</span> info@example.com</div>
          <div className="info-item"><span className="icon">📞</span> +123 456 789</div>
        </div>
      </div>
    </section>
  );
};

export default Getin;