// src/components/About.js
import React from 'react';
import profileImg from '../img/photo.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
const About = () => {
  return (
    <section id="about" className="about section">
            <div className="section-title" data-aos="fade-up">

        <h2>About</h2>
        <p>
   I'm Louay Hcine, a passionate web developer with a recent computer science degree (software engineering major), specializing in designing intuitive web applications.
        </p>
   
</div>
      <div className="row gy-4 justify-content-center align-items-center">
  {/* Image à gauche */}
  <div className="col-lg-4">
    <img src={profileImg} className="img-fluid" alt="Profile" />
  </div>

  {/* Texte à droite */}
  <div className="col-lg-8 content">
    <h2>UI/UX Designer &amp; Web Developer.</h2>
    <p className="fst-italic py-3">Software engineer Junior</p>

    <div className="row">
      <div className="col-lg-6">
        <ul>
          <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>21 July 2001</span></li>
          <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+216 29 947 728</span></li>
          <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Gabes, Tunisia</span></li>
          <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.louaylh10@gmail.com</span></li>
        </ul>
      </div>
      <div className="col-lg-6">
        <ul>
          <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li>
          <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Engineer</span></li>
          <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>hcinlouay@gmail.com</span></li>
          <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
        </ul>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default About;
