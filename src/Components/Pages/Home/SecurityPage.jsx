import React from "react";
import { MdLock, MdOutlineCameraswitch, MdFingerprint, MdVideoCall } from "react-icons/md";
import "./SecurityPage.css";
import securityImg from "../../../assets/images/security.jpg";

export default function SecurityPage() {
  return (
    <div className="container-fluid security-section py-5">
      <div className="row align-items-stretch">

        <div className="col-lg-6 col-md-12 text-section d-flex flex-column">
          <div className="flex-shrink-0">
            <h2 className="security-title">New Look At Security</h2>
            <p className="security-desc">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. Get our latest trends and techniques used in product development digital marketing business.
            </p>
          </div>

          <div className="row icon-row g-4 flex-grow-1">
            <div className="col-lg-6 col-md-6 d-flex">
              <div className="icon-box w-100">
                <div className="icon-circle">
                  <MdLock size={40} />
                </div>
                <h5 className="icon-title">Burglar & Intrusion</h5>
                <p className="icon-desc">Protect your employees, customers and assets with an smart alarm..</p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 d-flex">
              <div className="icon-box w-100">
                <div className="icon-circle">
                  <MdOutlineCameraswitch size={40} />
                </div>
                <h5 className="icon-title">Video Surveillance</h5>
                <p className="icon-desc">24 hour inside and outside the premises provided with video surveillance.</p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 d-flex">
              <div className="icon-box w-100">
                <div className="icon-circle">
                  <MdFingerprint size={40} />
                </div>
                <h5 className="icon-title">Access Control</h5>
                <p className="icon-desc">Create credentials and manage across systems managing security.</p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 d-flex">
              <div className="icon-box w-100">
                <div className="icon-circle">
                  <MdVideoCall size={40} />
                </div>
                <h5 className="icon-title">Video Intercom</h5>
                <p className="icon-desc">Intercoms give the the ability to screen visitors prior to allowing access.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 d-flex mt-4 mt-lg-0">
          <img src={securityImg} alt="Security" className="img-fluid security-img h-100 w-100" style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
}