import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ClientsSay.css'; 
import Carousel from 'react-bootstrap/Carousel';
import x1 from "../../../assets/images/x1.png"; 

const ClientsSay = () => {
  const testimonialText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.";
  const clientName = "Hester Perkins";

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">What Our Clients Say</h1>
      <p className="text-center mb-5">
        Contrary to popular belief Lorem Ipsum is not simply random text nam eget dui etiam whoncus.
      </p>

      <Carousel
        prevIcon={<span className="carousel-arrow left-arrow">&#10094;</span>}
        nextIcon={<span className="carousel-arrow right-arrow">&#10095;</span>}
        indicators={false} 
      >

        <Carousel.Item>
          <div className="testimonial-box mx-auto text-center p-4 bg-light rounded">
            <img src={x1} alt="Client" className="mb-3" />
            <p>{testimonialText}</p>
            <h5 className="mt-3">{clientName}</h5>
          </div>
        </Carousel.Item>


        <Carousel.Item>
          <div className="testimonial-box mx-auto text-center p-4 bg-light rounded">
            <img src={x1} alt="Client" className="mb-3" />
            <p>{testimonialText}</p>
            <h5 className="mt-3">{clientName}</h5>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ClientsSay;