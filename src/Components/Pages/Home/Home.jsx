import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

import camera1 from "../../../assets/images/camera1.png";
import camera2 from "../../../assets/images/camera2.png";

export default function Home() {
  return (
    <div className="w-100">
      <Carousel indicators={false} controls={true} interval={5000} fade>
        <Carousel.Item>
          <div
            className="d-flex flex-column flex-lg-row align-items-center justify-content-center py-5"
            style={{
              minHeight: "95vh",
              background: "#05070a",
              padding: "0 5rem",
              gap: "4rem",
              position: "relative",
              overflow: "hidden"
            }}
          >
            {/* Background Accent for depth */}
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(0, 242, 255, 0.1) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 1 }}></div>

            <div className="text-start" style={{ maxWidth: "650px", zIndex: 3, padding: '2.5rem', borderRadius: '30px', background: '#05070a', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
              <h1 className="fw-bold text-white mb-0" style={{ fontSize: "5rem", lineHeight: "1", letterSpacing: "-2px" }}>
                Next-Gen <br />
                <span className="neon-text" style={{ fontSize: "5.5rem" }}>CCTV</span> Systems
              </h1>
              <h2 className="text-light mt-3 mb-4" style={{ fontSize: "2.2rem", fontWeight: "300", opacity: 0.9 }}>
                & Access Control Solutions
              </h2>
              <p className="mt-3 mb-5" style={{ fontSize: "1.25rem", lineHeight: "1.8", color: "#cbd5e0", maxWidth: '95%' }}>
                Protect what matters most with AI-driven surveillance.
                Our systems offer real-time tracking, 4K clarity, and instant mobile alerts.
              </p>
              <Button
                variant="primary"
                size="lg"
                className="d-flex align-items-center gap-3 mt-4 btn-primary p-3 px-5 shadow-lg border-0"
                style={{ fontSize: '1.2rem', letterSpacing: '1px' }}
              >
                EXPLORE MORE <FaArrowRight />
              </Button>
            </div>
            <div className="animate-float" style={{ zIndex: 2, flexShrink: 0 }}>
              <img
                src={camera1}
                alt="Camera 1"
                className="img-fluid"
                style={{
                  maxHeight: "600px",
                  filter: "drop-shadow(0px 30px 60px rgba(0, 242, 255, 0.25))"
                }}
              />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div
            className="d-flex flex-column flex-lg-row align-items-center justify-content-center py-5"
            style={{
              minHeight: "95vh",
              background: "#05070a",
              padding: "0 5rem",
              gap: "4rem",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(112, 0, 255, 0.1) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 1 }}></div>

            <div className="text-start" style={{ maxWidth: "650px", zIndex: 3, padding: '2.5rem', borderRadius: '30px', background: '#05070a', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
              <h1 className="fw-bold text-white mb-0" style={{ fontSize: "5rem", lineHeight: "1", letterSpacing: "-2px" }}>
                Ultimate <br />
                <span className="neon-text" style={{ fontSize: "5.5rem" }}>Security</span>
              </h1>
              <h2 className="text-light mt-3 mb-4" style={{ fontSize: "2.2rem", fontWeight: "300", opacity: 0.9 }}>
                For Your Home & Business
              </h2>
              <p className="mt-3 mb-5" style={{ fontSize: "1.25rem", lineHeight: "1.8", color: "#cbd5e0", maxWidth: '95%' }}>
                Smart solutions for a safer tomorrow. Integrated access control
                and perimeter defense starting from your doorstep.
              </p>
              <Button
                variant="primary"
                size="lg"
                className="d-flex align-items-center gap-3 mt-4 btn-primary p-3 px-5 shadow-lg border-0"
                style={{ fontSize: '1.2rem', letterSpacing: '1px' }}
              >
                ORDER NOW <FaArrowRight />
              </Button>
            </div>
            <div className="animate-float" style={{ animationDelay: '1s', zIndex: 2, flexShrink: 0 }}>
              <img
                src={camera2}
                alt="Camera 2"
                className="img-fluid"
                style={{
                  maxHeight: "600px",
                  filter: "drop-shadow(0px 30px 60px rgba(112, 0, 255, 0.25))"
                }}
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}