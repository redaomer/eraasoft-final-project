import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import "./Recent.css";

import recent1 from "../../../assets/images/recent1.jpg";
import recent2 from "../../../assets/images/recent2.jpg";
import recent3 from "../../../assets/images/recent3.jpg";
import recent4 from "../../../assets/images/recent4.jpg";
import recent5 from "../../../assets/images/recent5.jpg";
import recent6 from "../../../assets/images/recent6.jpg";

const Recent = () => {
  const articles = [
    { 
      img: recent1, 
      date: "20 June, 2023 - 0 Comments", 
      title: "Increasing staff motivation", 
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprhen voluptate velit esse cillum dolore eu fugiat to nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qei officia deser mollit anim id est to laborum sed ut perspiciatis." 
    },
    { 
      img: recent2, 
      date: "21 June, 2023 - 5 Comments", 
      title: "Fixing a camera for safety", 
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprhen voluptate velit esse cillum dolore eu fugiat to nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qei officia deser mollit anim id est to laborum sed ut perspiciatis." 
    },
    { 
      img: recent3, 
      date: "22 June, 2023 - 2 Comments", 
      title: "Traffic security camera", 
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprhen voluptate velit esse cillum dolore eu fugiat to nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qei officia deser mollit anim id est to laborum sed ut perspiciatis." 
    },
    { 
      img: recent4, 
      date: "23 June, 2023 - 1 Comments", 
      title: "Testing a camera switch", 
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprhen voluptate velit esse cillum dolore eu fugiat to nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qei officia deser mollit anim id est to laborum sed ut perspiciatis" 
    },
    { 
      img: recent5, 
      date: "24 June, 2023 - 3 Comments", 
      title: "Capture Memories In Phone", 
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprhen voluptate velit esse cillum dolore eu fugiat to nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qei officia deser mollit anim id est to laborum sed ut perspiciatis." 
    },
    { 
      img: recent6, 
      date: "25 June, 2023 - 0 Comments", 
      title: "Bullet type security camera", 
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprhen voluptate velit esse cillum dolore eu fugiat to nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qei officia deser mollit anim id est to laborum sed ut perspiciatis." 
    },
  ];

  return (
    <section className="recent-section py-5">
      
      <div className="text-center mb-5">
        <h2 className="recent-title">Recent Articles</h2>
        <p className="recent-subtitle">
          Contrary to popular belief Lorem Ipsum is not simply random text nam eget dui etiam whoncus.
        </p>
      </div>

      <Carousel
        indicators={false}
        controls={true}
        interval={null}
        className="recent-carousel"
      >
        {[0, 1].map((slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <Row className="g-4 justify-content-center">
              {articles
                .slice(slideIndex * 3, slideIndex * 3 + 3)
                .map((article, idx) => (
                  <Col md={4} key={idx}>
                    <div className="recent-card">
                      
                      <img
                        src={article.img}
                        alt={article.title}
                        className="img-fluid recent-img"
                      />

                      <p className="recent-date">{article.date}</p>

                      <h5 className="recent-article-title">{article.title}</h5>

                      <p className="recent-article-text">{article.text}</p>
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

export default Recent;