import React from 'react';
import './About.css';
import aboutImage from '../../../assets/images/about-image.png'; 

const About = () => {
  return (
    <div className="about-page-wrapper">
      <div className="page-title">
        <h1 style={{ fontWeight: 700, fontSize: '4.5rem', margin: 0, color: '#222', letterSpacing: '1px' }}>ABOUT</h1>
      </div>
      <div className="about-row">
        <div className="left-col">
          <img src={aboutImage} alt="CCTV" className="about-image" />
          <div className="experience-box">
            <h5 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 8 }}>Good Experience<br />In Last</h5>
            <h2 style={{ fontSize: '4rem', fontWeight: 700, marginBottom: 8 }}>30</h2>
            <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>Years</p>
          </div>
        </div>
        <div className="right-col">
          <h3 style={{ fontWeight: 700, fontSize: '2.3rem', marginBottom: 18, color: '#111', lineHeight: 1.2 }}>
            Since 1987, We have established ourselves with a strong reputation.
          </h3>
          <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: 18, lineHeight: 1.7 }}>
            Magnificent Quality Gives You an Edge orem ipsum dolor, sit amet consectetur adipiscing elit.<br />
            Quasi commodi nesciunt suscipit odio cum iure aliquid dicta distinctio asperiores modi! Culpa, eveniet repellendus in reprehenderit ducimus harum consectetur corrupti unde.
          </p>
          <h5 style={{ fontWeight: 700, fontSize: '1.15rem', color: '#111', marginBottom: 10 }}>
            Win best cctv safety at 2023.
          </h5>
          <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: 18, lineHeight: 1.7 }}>
            Provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a solution. Sinp provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a solution.
          </p>
          <button style={{
            padding: '14px 38px',
            fontSize: '1.25rem',
            marginTop: '8px',
            backgroundColor: '#4a90ff',
            color: '#fff',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            fontWeight: 500,
            boxShadow: '0 2px 8px rgba(74,144,255,0.12)'
          }}>
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;