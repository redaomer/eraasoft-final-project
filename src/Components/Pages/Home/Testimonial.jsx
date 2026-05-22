import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Testimonial.css";

// استيراد الصور من المسار الصحيح
import profile1 from "../../../assets/images/profile1.jpg";
import profile2 from "../../../assets/images/profile2.jpg";
import profile3 from "../../../assets/images/profile3.jpg";

const Testimonial = () => {
  const testimonials = [
    {
      img: profile1,
      text: "I am extremely impressed with the CCTV system installed by ZOSE. The video picture quality was crystal clear.",
      name: "Hester Perkins"
    },
    {
      img: profile2,
      text: "I can't thank ZOSE enough for the exceptional CCTV system they installed business the quality and reliability.",
      name: "Hester Perkins"
    },
    {
      img: profile3,
      text: "After searching for the best CCTV provider I came across ZOSE and I'm glad I did. Their knowledgeable team.",
      name: "Bantin Haris"
    }
  ];

  return (
    <section className="testimonial-section py-5">
      <div className="text-center mb-5">
        <h2 className="testimonial-title">Testimonial</h2>
        <p className="testimonial-subtitle">
          Contrary to popular belief Lorem Ipsum is not simply random text nam eget dui etiam whoncus.
        </p>
      </div>

      <Row className="g-4 justify-content-center">
        {testimonials.map((t, idx) => (
          <Col md={4} key={idx}>
            <div className="testimonial-card text-center p-4">
              <img
                src={t.img}
                alt={t.name}
                className="testimonial-img mb-3"
              />
              <p className="testimonial-text">{t.text}</p>

              <h5 className="testimonial-name">{t.name}</h5>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Testimonial;