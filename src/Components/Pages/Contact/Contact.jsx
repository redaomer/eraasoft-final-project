import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section dark-theme">
      <div className="contact-header">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">We'd love to hear from you! Fill out the form and our team will get back to you shortly.</p>
      </div>

      <div className="map-container">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16627.749619312064!2d31.268288870289656!3d30.053807952535955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840baf551f617%3A0xbafb145a268367fd!2z2YXYqtit2YEg2YLYtdixINi52KfYqNiv2YrZhg!5e0!3m2!1sar!2seg!4v1744912379690!5m2!1sar!2seg"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contact-wrapper">
        <div className="contact-left contact-card">
          <form className="contact-form" autoComplete="off">
            <div className="form-group">
              <input type="text" id="name" className="input" placeholder=" " autoComplete="name" required />
              <label htmlFor="name" className="floating">Full Name</label>
            </div>
            <div className="form-group">
              <input type="email" id="email" className="input" placeholder=" " autoComplete="email" required />
              <label htmlFor="email" className="floating">Email Address</label>
            </div>
            <div className="form-group">
              <input type="tel" id="phone" className="input" placeholder=" " autoComplete="tel" />
              <label htmlFor="phone" className="floating">Phone Number</label>
            </div>
            <div className="form-group">
              <textarea id="message" className="input textarea" placeholder=" " rows={5} required />
              <label htmlFor="message" className="floating">Message</label>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
        <div className="contact-right">
          <div className="contact-card contact-info">
            <h3 className="contact-card-title">Contact Information</h3>
            <p className="contact-line"><span className="icon">📍</span> 123 Suspendis matti, Visaosang Building VST District, NY Accums, North American.</p>
            <p className="contact-line"><span className="icon">✉️</span> support@domain.com</p>
            <p className="contact-line"><span className="icon">📞</span> (012)-345-67890</p>
            <p className="contact-line"><span className="icon">🕘</span> Open daily 11am to 7pm</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;