import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import "./Category.css";

import cat1 from "../../../assets/images/q1.jpg";
import cat2 from "../../../assets/images/q2.jpg";
import cat3 from "../../../assets/images/q3.jpg";
import cat4 from "../../../assets/images/q4.jpg";
import cat5 from "../../../assets/images/q1.jpg";
import cat6 from "../../../assets/images/q2.jpg";

const Category = () => {
  const categories = [
    { 
      img: cat1, 
      title: "Smock Infrared Camera (10)", 
      text: "Simply random text." 
    },
    { 
      img: cat2, 
      title: "High Definition Camera (8)", 
      text: "Simply random text." 
    },
    { 
      img: cat3, 
      title: "Zoom Lanes cameras (8)", 
      text: "Simply random text" 
    },
    { 
      img: cat4, 
      title: "Wireless CCTV App (10)", 
      text: "Simply random text." 
    },
    { 
      img: cat5, 
      title: "Smock Infrared Camera (10)", 
      text: "Simply random text." 
    },
    { 
      img: cat6, 
      title: "High Definition Camera (8)", 
      text: "Simply random text." 
    },
  ];

  return (
    <section className="category-section py-5">
      <div className="text-center mb-5">
        <h2 className="category-title">Shop By Category</h2>
        <p className="category-subtitle">
          Contrary to popular belief Lorem Ipsum is not simply random text nam eget dui etiam whoncus.
        </p>
      </div>

      <Carousel
        indicators={false}
        controls={true}
        interval={null}
        className="category-carousel"
      >
        {[0, 1].map((slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <Row className="g-4 justify-content-center">
              {categories
                .slice(slideIndex * 3, slideIndex * 3 + 3)
                .map((category, idx) => (
                  <Col md={4} key={idx}>
                    <div className="category-card">
                      <div className="category-img-wrap">
                        <img
                          src={category.img}
                          alt={category.title}
                          className="img-fluid category-img"
                          width={340}
                          height={220}
                          loading="lazy"
                        />
                        <div className="category-overlay"></div>
                      </div>
                      <div className="category-card-content">
                        <h5 className="category-article-title">{category.title}</h5>
                        <p className="category-article-text">{category.text}</p>
                      </div>
                    </div>
                  </Col>
                ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Category;