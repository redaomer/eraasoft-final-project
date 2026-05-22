import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaLock, FaVideo } from "react-icons/fa";
import "./Request.css";

const Request = () => {
  return (
    <section className="request-section py-5">
      <Row className="g-5 justify-content-center align-items-start">
    
        <Col md={6}>
    <div className="request-form-box request-card p-4">
            <h3 className="form-title mb-4">Submit Your Request</h3>
            <Form>
              <Row className="mb-3">
                <Col>
                  <Form.Control type="text" placeholder="Your Name" />
                </Col>
                <Col>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Mobile Number" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={4} placeholder="Your Message" />
              </Form.Group>
              <Button variant="primary" type="submit" className="submit-btn">
                Submit Request
              </Button>
            </Form>
          </div>
        </Col>

        <Col md={6}>
          <div className="request-right">
            <h2 className="right-title">Request An Quote!</h2>
            <p className="right-subtitle">
             Please complete the form below, to request a quote, and we’ll be in touch. Or you can call us 01061245741 and our specialists will provide the necessary help!
            </p>

            <Row className="icon-row g-4 mt-4">
              <Col md={6} className="text-center icon-box">
                <FaLock className="icon-style" />
                <h5 className="icon-title mt-2">Security camera</h5>
                <p className="icon-text">Protect your employees, customers and assets with an smart alarm.</p>
              </Col>
              <Col md={6} className="text-center icon-box">
                <FaVideo className="icon-style" />
                <h5 className="icon-title mt-2">Increase Security</h5>
                <p className="icon-text">Protect your employees, customers and assets with an smart alarm.</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Request;