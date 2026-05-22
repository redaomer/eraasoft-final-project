import React from "react";
import { FaRegHeart, FaShoppingBag, FaImages } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Products.css";

import p1 from "../../../assets/images/p1.png";
import p2 from "../../../assets/images/p2.png";
import p3 from "../../../assets/images/p3.png";
import p4 from "../../../assets/images/p4.png";
import p5 from "../../../assets/images/p5.png";
import p6 from "../../../assets/images/p6.png";
import p7 from "../../../assets/images/p7.png";
import p8 from "../../../assets/images/p8.png";

const products = [
  { id: 1, img: p1, name: "Network PTZ Camera", price: "$55.00", oldPrice: "$75.00", label: "SALE" },
  { id: 2, img: p2, name: "4K Starlight Camera", price: "$70.00", oldPrice: "$85.00", label: "SOLD OUT" },
  { id: 3, img: p3, name: "Black Mini Camera", price: "$90.00", oldPrice: "$120.00", label: "SALE" },
  { id: 4, img: p4, name: "Net Starlight Camera", price: "$990.00", oldPrice: "$1000.00", label: "SOLD OUT" },
  { id: 5, img: p5, name: "4MP Starlight Camera", price: "$39.00", oldPrice: "$60.00", label: "SALE" },
  { id: 6, img: p6, name: "4-Channel IP Security", price: "$110.00", oldPrice: "$140.00", label: "SOLD OUT" },
  { id: 7, img: p7, name: "2K IP Security System", price: "$79.00", oldPrice: "$160.00", label: "SALE" },
  { id: 8, img: p8, name: "4MP Starlight Camera", price: "$150.00", oldPrice: "$200.00", label: "SOLD OUT" },
];

export default function Products() {
  const handleAction = (action, product) => {
    alert(`${action} clicked for ${product.name}`);
  };

  return (
    <div className="container-fluid py-5" style={{ background: 'transparent' }}>
      <h1 className="text-center mb-3 fw-bold neon-text" style={{ fontSize: "3.5rem" }}>Our Products</h1>
      <p className="text-center mb-5" style={{ fontSize: "1.2rem", maxWidth: '700px', margin: '0 auto' }}>
        Discover our top-of-the-line security solutions designed for absolute peace of mind.
      </p>

      <div className="row g-3">
        {products.map((product) => {
          const productLink =
            product.id === 1
              ? "/product/1"
              : product.id === 2
                ? "/details2/2"
                : product.id === 3
                  ? "/details3/3"
                  : product.id === 4
                    ? "/details4/4"
                    : product.id === 5
                      ? "/details5/5"
                      : product.id === 6
                        ? "/details6/6"
                        : product.id === 7
                          ? "/details7/7"
                          : product.id === 8
                            ? "/details8/8"
                            : `/product/${product.id}`;

          return (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
              <div className="product-card glass h-100 position-relative text-center p-3 border-0 transition-all">
                <span
                  className={`badge position-absolute top-0 start-0 m-3 ${product.label === "SALE" ? "bg-success" : "bg-danger"
                    } shadow-sm`}
                  style={{ zIndex: 3, borderRadius: '4px', padding: '6px 12px' }}
                >
                  {product.label}
                </span>

                <div className="position-relative overflow-hidden rounded mb-3">
                  <Link to={productLink}>
                    <img
                      src={product.img}
                      alt={product.name}
                      className="img-fluid transition-all"
                      style={{ transition: '0.5s ease' }}
                    />
                  </Link>

                  <div className="hover-icons">
                    <div
                      className="icon-circle mb-2"
                      onClick={() => handleAction("View Gallery", product)}
                    >
                      <FaImages />
                    </div>
                    <div
                      className="icon-circle mb-2"
                      onClick={() => handleAction("Add to Wishlist", product)}
                    >
                      <FaRegHeart />
                    </div>
                    <div
                      className="icon-circle"
                      onClick={() => handleAction("Add to Cart", product)}
                    >
                      <FaShoppingBag />
                    </div>
                  </div>
                </div>

                <h5
                  className="mt-2"
                  style={{ fontSize: "1.1rem", fontWeight: "700", color: 'var(--text)' }}
                >
                  {product.name}
                </h5>
                <div className="product-price mb-3">
                  <span className="text-success fw-bold me-2" style={{ fontSize: '1.2rem' }}>{product.price}</span>
                  <span className="text-decoration-line-through small">
                    {product.oldPrice}
                  </span>
                </div>

                <Link to={productLink} className="mt-auto">
                  <Button variant="primary" className="btn-primary w-100 fw-bold">
                    Buy Now
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}