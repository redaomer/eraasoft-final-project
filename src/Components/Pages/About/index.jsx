import React from "react";
import AboutUs from "./AboutUs";
import Reasons from "./Reasons";
import ClientsSay from "./ClientsSay";
import TeamMembers from "./TeamMembers"; 

import "./About.css";

const About = () => {
  return (
    <div className="container about-page mt-5">
      <AboutUs />
      <Reasons />
      <ClientsSay />
      <TeamMembers />  
    </div>
  );
};

export default About;