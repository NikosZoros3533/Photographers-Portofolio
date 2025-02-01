import React from 'react';
import '../css/About.css'; // Import the CSS file
import heroIcon from "../assets/heroIcon.jpg"

const About = () => {
  return (
    <div className="about-photographer">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>About Me</h1>
          <p>Capturing moments that tell your story.</p>
        </div>
      </div>

      {/* Biography Section */}
      <div className="biography-section container">
        <div className="biography-content">
          <div className="profile-picture">
            <img
              src={heroIcon}
              alt="Photographer"
            />
          </div>
          <div className="biography-text">
            <h2>Biography</h2>
            <p>
              Hi, I'm Dionisis Velentakis, a professional photographer with over 10 years of experience in capturing the beauty of life through my lens. 
              Specializing in portrait, landscape, and wildlife photography, I strive to create images that evoke emotion and tell a story. 
              My work has been featured in various publications and exhibitions, and I am passionate about helping people preserve their most cherished moments.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <div className="container2">
          <h2>Skills & Specializations</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Portrait Photography</h3>
              <p>Capturing the essence and personality of individuals through stunning portraits.</p>
            </div>
            <div className="skill-card">
              <h3>Landscape Photography</h3>
              <p>Showcasing the beauty of nature and the world around us with breathtaking landscapes.</p>
            </div>
            <div className="skill-card">
              <h3>Wildlife Photography</h3>
              <p>Documenting the wonders of wildlife in their natural habitats.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;