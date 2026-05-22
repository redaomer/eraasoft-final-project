import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUniversity, FaSchool, FaHospital, FaShoppingBag, FaHome, FaGavel } from "react-icons/fa";
import "./Solutions.css";

const Solutions = () => {
  return (
    <section className="py-5 solutions-section">
      <Container>
        <h1 className="text-center mb-3 fw-bold">Solutions We Offer</h1>
        <p className="text-center mb-5">
          Discover our range of services designed to cater to various industries with precision and quality.
        </p>


        <Row className="mb-5">
          <Col md={4} className="mb-4">
            <Card className="text-center shadow solution-card p-4">
              <Card.Body>
                <FaUniversity size={60} className="mb-4 text-primary" />
                <h5 className="mb-3">
                  Banking Sectors
                </h5>
                <p>
                  Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-center shadow solution-card p-4">
              <Card.Body>
                <FaSchool size={60} className="mb-4 text-success" />
                <h5 className="mb-3">E
                  Education Institute</h5>
                <p>
                  Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-center shadow solution-card p-4">
              <Card.Body>
                <FaHospital size={60} className="mb-4 text-danger" />
                <h5 className="mb-3">
                  Hospital Sectors
                </h5>
                <p>
                  Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>


        <Row>
          <Col md={4} className="mb-4">
            <Card className="text-center shadow solution-card p-4">
              <Card.Body>
                <FaShoppingBag size={60} className="mb-4 text-warning" />
                <h5 className="mb-3">
                  Shopping & Retail
                </h5>
                <p>
                  Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-center shadow solution-card p-4">
              <Card.Body>
                <FaHome size={60} className="mb-4 text-info" />
                <h5 className="mb-3">Real Estate</h5>
                <p>
                  Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-center shadow solution-card p-4">
              <Card.Body>
                <FaGavel size={60} className="mb-4 text-secondary" />
                <h5 className="mb-3">Law Enforcement</h5>
                <p>
                  Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Solutions;