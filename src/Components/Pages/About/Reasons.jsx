import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Reasons.css';

import a1 from "../../../assets/images/a1.png";
import a2 from "../../../assets/images/a2.png";
import a3 from "../../../assets/images/a3.png";

const Reasons = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Reasons to Choose Us</h1>
      <p className="text-center mb-5">
        Contrary to popular belief, Lorem Ipsum is not simply random text. Nam eget dui etiam whoncus.
      </p>

      <div className="row g-4"> 
        
        <div className="col-md-4">
          <div className="reason-box text-center p-4 h-100 d-flex flex-column align-items-center">
            <img src={a1} alt="Best Services" className="img-fluid mb-3 reason-img" />
            <h4>Best Services</h4>
            <p className="mb-3 text-center">
              Service unequally distributed worldwide with increasing concentration.
            </p>
            <button className="btn btn-primary rounded-pill mt-auto">Know More</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="reason-box text-center p-4 h-100 d-flex flex-column align-items-center">
            <img src={a2} alt="Experienced" className="img-fluid mb-3 reason-img" />
            <h4>Experienced</h4>
            <p className="mb-3 text-center">
              Experience unequally distributed worldwide with increasing concentration.
            </p>
            <button className="btn btn-primary rounded-pill mt-auto">Know More</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="reason-box text-center p-4 h-100 d-flex flex-column align-items-center">
            <img src={a3} alt="Professionals" className="img-fluid mb-3 reason-img" />
            <h4>Professionals</h4>
            <p className="mb-3 text-center">
              Professionals unequally distributed worldwide with increasing concentration.
            </p>
            <button className="btn btn-primary rounded-pill mt-auto">Know More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;