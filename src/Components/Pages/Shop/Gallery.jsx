import React from "react";
import { FaRegHeart, FaShoppingBag, FaImages } from "react-icons/fa";
import "./Gallery.css";

import p1 from "../../../assets/images/p1.png";
import p2 from "../../../assets/images/p2.png";
import p3 from "../../../assets/images/p3.png";
import p4 from "../../../assets/images/p4.png";
import p5 from "../../../assets/images/p5.png";
import p6 from "../../../assets/images/p6.png";
import bigImg from "../../../assets/images/bigImg.png";

const galleryItems = [
  { id: 1, img: p1, name: "Network PTZ Camera", price: "$55" },
  { id: 2, img: p2, name: "4K Starlight Camera", price: "$70" },
  { id: 3, img: p3, name: "Black Mini Camera", price: "$39" },
  { id: 4, img: p4, name: "4K Starlight Camera", price: "$70" },
  { id: 5, img: p5, name: "4-Channel IP Security", price: "$110" },
  { id: 6, img: p6, name: "4MP Starlight Camera", price: "$39" },
];

export default function Gallery() {
  const handleAction = (action, item) => {
    alert(`${action} clicked for ${item.name}`);
  };

  return (
    <div className="gallery-container d-flex justify-content-center py-5 align-items-start">

      <div className="gallery-left flex-grow-2">
        <div className="text-center mb-5">
          <h1 style={{ fontSize: "3rem" }}>Our Products</h1>
          <p style={{ fontSize: "1.25rem" }}>Check out our latest items and special offers.</p>
        </div>

        {[0, 1].map((rowIndex) => (
          <div key={rowIndex} className="d-flex mb-4 gap-4">
            {galleryItems.slice(rowIndex * 3, rowIndex * 3 + 3).map((item) => (
              <div key={item.id} className="gallery-item position-relative text-center flex-grow-1">

                <img src={item.img} alt={item.name} className="img-fluid rounded gallery-row-img" />

                <div className="hover-icons d-flex flex-column gap-2">
                  <div className="icon-circle" onClick={() => handleAction("View Gallery", item)}>
                    <FaImages />
                  </div>
                  <div className="icon-circle" onClick={() => handleAction("Add to Wishlist", item)}>
                    <FaRegHeart />
                  </div>
                  <div className="icon-circle" onClick={() => handleAction("Add to Cart", item)}>
                    <FaShoppingBag />
                  </div>
                </div>

                <div className="product-info mt-2">
                  <h5 className="product-name">{item.name}</h5>
                  <span className="product-price">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="gallery-right ms-4">
        <img src={bigImg} alt="Big" className="img-fluid rounded gallery-big-img" />
      </div>
    </div>
  );
}