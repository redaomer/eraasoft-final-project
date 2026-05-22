import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTruck, FaCreditCard, FaHeadset, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import './Footer.css'; 

const Footer = () => {
  return (
    <footer>
      <Container fluid>

        <Row className="mb-5 text-center text-md-start">
          <Col md={4} className="mb-4 service-col">
            <FaTruck size={40} className="mb-3" />
            <h6>Free Shipping</h6>
            <p>From new orders over at $100</p>
          </Col>
          <Col md={4} className="mb-4 service-col">
            <FaCreditCard size={40} className="mb-3" />
            <h6>Payment Process</h6>
            <p>Return money within 30 days</p>
          </Col>
          <Col md={4} className="mb-4 service-col">
            <FaHeadset size={40} className="mb-3" />
            <h6>24/7 Support</h6>
            <p>We have everything you need</p>
          </Col>
        </Row>

        <hr />

        <Row className="text-center text-md-start align-items-start">

          <Col md={3} className="mb-3 footer-col">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li>Business Security</li>
              <li>Fire Detection</li>
              <li>Access Control</li>
              <li>Alarm Systems</li>
              <li>CCTV & Video</li>
            </ul>
          </Col>

          <Col md={3} className="mb-3 footer-col">
            <h6>Information</h6>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Leadership</li>
              <li>News & Media</li>
              <li>Services</li>
              <li>Our Reviews</li>
            </ul>
          </Col>

          <Col md={3} className="mb-3 footer-col">
            <h6>About Info</h6>
            <p>123 Pall Mall, London, England</p>
            <p>Email: hello@example.com</p>
            <p>Phone: (012) 345 6789</p>
          </Col>

          <Col md={3} className="mb-3 footer-col">
            <h6>Follow Us On</h6>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </Col>
        </Row>

        <hr />
        <p className="text-center mb-0">&copy; 2025 ZOSE. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;