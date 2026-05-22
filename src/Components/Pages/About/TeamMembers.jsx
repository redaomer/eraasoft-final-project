import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import w1 from "../../../assets/images/w1.png";
import w2 from "../../../assets/images/w2.png";
import w3 from "../../../assets/images/w3.png";
import w4 from "../../../assets/images/w4.png";

const TeamMembers = () => {
  const team = [
    { name: "Hazelwood", role: "Security Agent", image: w1 },
    { name: "Richard Brady", role: "Security SPV", image: w2 },
    { name: "Roxana Ruffin", role: "CCTV Engineer", image: w3 },
    { name: "Louis Coburn", role: "CCTV Engineer", image: w4 }
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Expert Team Members</h1>
      <p className="text-center mb-5">
        Contrary to popular belief Lorem Ipsum is not simply random text nam eget dui etiam whoncus.
      </p>
      <div className="row">
        {team.map((member, index) => (
          <div key={index} className="col-md-3 text-center mb-4">
            <div className="team-card">
              <img src={member.image} alt={member.name} className="img-fluid rounded" />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary me-2">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary me-2">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;