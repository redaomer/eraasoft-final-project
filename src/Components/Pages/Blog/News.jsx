import React from "react";
import { Row, Col } from "react-bootstrap";
import "./News.css"; 

import recent1 from "../../../assets/images/recent1.jpg";
import recent2 from "../../../assets/images/recent2.jpg";
import recent3 from "../../../assets/images/recent3.jpg";
import recent4 from "../../../assets/images/recent4.jpg";
import recent5 from "../../../assets/images/recent5.jpg";
import recent6 from "../../../assets/images/recent6.jpg";

const News = () => {
  const articles = [
    { 
      img: recent1, 
      date: "20 June, 2023 - 0 Comments", 
      title: "Increasing staff motivation", 
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
    },
    { 
      img: recent2, 
      date: "21 June, 2023 - 5 Comments", 
      title: "Fixing a camera for safety", 
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
    },
    { 
      img: recent3, 
      date: "22 June, 2023 - 2 Comments", 
      title: "Traffic security camera", 
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
    },
    { 
      img: recent4, 
      date: "23 June, 2023 - 1 Comments", 
      title: "Testing a camera switch", 
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
    },
    { 
      img: recent5, 
      date: "24 June, 2023 - 3 Comments", 
      title: "Capture Memories In Phone", 
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
    },
    { 
      img: recent6, 
      date: "25 June, 2023 - 0 Comments", 
      title: "Bullet type security camera", 
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
    },
  ];

  return (
    <section className="news-section py-5">
      <div className="text-center mb-5">
        <h2 className="news-title">Latest News</h2>
        <p className="news-subtitle">
          Contrary to popular belief, Lorem Ipsum is not simply random text.
        </p>
      </div>

      <Row className="g-4 justify-content-center">
        {articles.map((article, idx) => (
          <Col md={4} key={idx}>
            <div className="news-card">
              <img
                src={article.img}
                alt={article.title}
                className="img-fluid news-img"
              />

              <p className="news-date">{article.date}</p>
              <h5 className="news-article-title">{article.title}</h5>
              <p className="news-article-text">{article.text}</p>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default News;