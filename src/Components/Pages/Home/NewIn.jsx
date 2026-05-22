import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./NewIn.css";


import product1 from "../../../assets/images/p1.png";
import product2 from "../../../assets/images/p2.png";
import product3 from "../../../assets/images/p3.png";
import product4 from "../../../assets/images/p4.png";
import product5 from "../../../assets/images/p5.png";
import product6 from "../../../assets/images/p6.png";

const NewIn = () => {
  const products = [
    { img: product1, name: "Network PTZ Camera", price: "$100" },
    { img: product2, name: "Dome Camera", price: "$120" },
    { img: product3, name: "Bullet Camera", price: "$90" },
    { img: product4, name: "CCTV Monitor", price: "$150" },
    { img: product5, name: "NVR System", price: "$200" },
    { img: product6, name: "PoE Switch", price: "$180" },
  ];

  return (
    <section className="newin-section py-5">
      
      <div className="text-center mb-5">
        <h2 className="newin-title">New In The Week</h2>
        <p className="newin-subtitle">
          Contrary to popular belief Lorem Ipsum is not simply random text nam eget dui etiam whoncus.
        </p>
      </div>

      <Container fluid>
        <Row className="g-4">
          {products.map((product, idx) => (
            <Col md={4} key={idx}>
              <div className="d-flex align-items-center newin-item">
                <img
                  src={product.img}
                  alt={product.name}
                  className="newin-img"
                  width={180}
                  height={180}
                  loading="lazy"
                />
                <div className="ms-3">
                  <h5 className="product-name">{product.name}</h5>
                  <p className="product-price">{product.price}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default NewIn;