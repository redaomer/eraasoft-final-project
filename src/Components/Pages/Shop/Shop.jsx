import React from "react";
import { FaRegHeart, FaShoppingBag, FaImages } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Shop.css";

import p1 from "../../../assets/images/p1.png";
import p2 from "../../../assets/images/p2.png";
import p3 from "../../../assets/images/p3.png";
import p4 from "../../../assets/images/p4.png";
import p5 from "../../../assets/images/p5.png";
import p6 from "../../../assets/images/p6.png";
import p7 from "../../../assets/images/p7.png";
import p8 from "../../../assets/images/p8.png";

import Category from "./Category";
import Gallery from "./Gallery";

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

export default function Shop() {
  const handleAction = (action, product) => {
    alert(`${action} clicked for ${product.name}`);
  };

  return (
    <div className="container-fluid py-5">
      <h1 className="text-center mb-3" style={{ fontSize: "3rem" }}>Products</h1>
      <p className="text-center mb-5" style={{ fontSize: "1.2rem", maxWidth: '700px', margin: '0 auto' }}>exclusive range of products with special offers.
      </p>

      <div className="row g-4">
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
              <div className="product-card position-relative text-center p-3 shadow-sm rounded">
                <span
                  className={`badge position-absolute top-0 start-0 m-2 ${product.label === "SALE" ? "bg-success" : "bg-danger"
                    }`}
                >
                  {product.label}
                </span>

                <div className="position-relative product-img-container">

                  <Link to={productLink}>
                    <img src={product.img} alt={product.name} className="img-fluid rounded" />
                  </Link>

                  <div className="hover-icons d-flex flex-column gap-2">
                    <div className="icon-circle" onClick={() => handleAction("View Gallery", product)}>
                      <FaImages />
                    </div>
                    <div className="icon-circle" onClick={() => handleAction("Add to Wishlist", product)}>
                      <FaRegHeart />
                    </div>
                    <div className="icon-circle" onClick={() => handleAction("Add to Cart", product)}>
                      <FaShoppingBag />
                    </div>
                  </div>
                </div>

                <h5 className="mt-3" style={{ fontSize: "1.2rem", fontWeight: "600" }}>{product.name}</h5>
                <div className="product-price d-flex flex-column align-items-center mb-2">
                  <span className="text-success fw-bold">{product.price}</span>
                  <span className="text-decoration-line-through">{product.oldPrice}</span>
                </div>


                <Link to={productLink} className="btn btn-primary w-100 fw-bold">
                  Buy Now
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <Category />
      <Gallery />
    </div>
  );
}