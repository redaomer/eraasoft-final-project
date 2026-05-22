import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Details7.css"; 
import p2 from "../../../assets/images/p2.png";
import p3 from "../../../assets/images/p3.png";
import p4 from "../../../assets/images/p4.png";
import p5 from "../../../assets/images/p5.png";
import p6 from "../../../assets/images/p6.png";
import p7 from "../../../assets/images/p7.png"; 

const ProductDetails = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-1 d-flex flex-column align-items-center">
          <img src={p2} alt="camera" className="img-thumbnail mb-2" />
          <img src={p3} alt="camera" className="img-thumbnail mb-2" />
          <img src={p4} alt="camera" className="img-thumbnail mb-2" />
        </div>

        <div className="col-md-5 text-center">
          <img src={p7} alt="Main Camera" className="img-fluid" />
        </div>

        <div className="col-md-6">
          <h3>2K IP Security System</h3>
          <h4 className="text-primary">$79.00</h4>
          <p>Availability: 6 left in stock</p>
          <p>
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized by the charms of pleasure of the moment...
          </p>

          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Name</th>
                <td>2K IP Security System</td>
              </tr>
              <tr>
                <th>Vendor</th>
                <td>DAHUA</td>
              </tr>
              <tr>
                <th>Type</th>
                <td>Dome CCTV</td>
              </tr>
              <tr>
                <th>Manufacturing</th>
                <td>2023 / 05 / 28</td>
              </tr>
            </tbody>
          </table>

          <div className="d-flex gap-2 mt-3">
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-dark">Buy It Now</button>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-3">
          <div className="card">
            <img src={p5} alt="10MP Camera" className="card-img-top" />
            <div className="card-body">
              <h6>10MP Starlight Camera</h6>
              <p>
                <del>$75.00</del>{" "}
                <span className="text-primary">$55.00</span>
              </p>
              <button className="btn btn-outline-primary w-100">Add to cart</button>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src={p6} alt="4-Channel IP" className="card-img-top" />
            <div className="card-body">
              <h6>4-Channel IP Security</h6>
              <p>
                <del>$139.00</del>{" "}
                <span className="text-primary">$110.00</span>
              </p>
              <button className="btn btn-outline-primary w-100">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;