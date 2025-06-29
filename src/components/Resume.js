import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          Passionate junior software engineer specialized in web development, with experience in building 
          intuitive web applications and e-learning platforms. Strong technical skills and team player.
        </p>
      </div>

      <div className="row">
        {/* Left Column */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 className="resume-title">Summary</h3>
          <div className="resume-item pb-0">
            <h4>Louay Heine</h4>
            <p><em>Junior Software Engineer</em></p>
            <p>
              <em>
                Passionate web developer recently graduated in Computer Science (Software Engineering option),
                specialized in designing intuitive web applications.
              </em>
            </p>
            <ul>
              <li>6012 Gabes, Tunisia</li>
              <li>+216 29 947 728</li>
              <li>hcinlouay@gmail.com</li>
              <li><strong>Languages:</strong> Arabic (Native), French (Fluent), English (Intermediate)</li>
              <li><strong>Driving License:</strong> Category B + Personal Vehicle</li>
            </ul>
          </div>

          <h3 className="resume-title">Education</h3>

          <div className="resume-item">
            <h4>Computer Engineering Degree</h4>
            <h5>2023 - 2026</h5>
            <p><em>EPI Digital School, Sousse</em></p>
          </div>

          <div className="resume-item">
            <h4>Bachelor's Degree in Computer Science</h4>
            <h5>2022 - 2023</h5>
            <p><em>Higher Institute of Applied Sciences and Technology, Sousse</em></p>
          </div>

          <div className="resume-item">
            <h4>Baccalaureate in Computer Science</h4>
            <h5>2019 - 2020</h5>
            <p><em>Lycée El Amal, Gabès</em></p>
            <p>Graduated with "Good" honors</p>
          </div>

          <h3 className="resume-title">Technical Skills</h3>
          <div className="resume-item">
            <ul className="skill-list">
              <li><strong>Expert:</strong> HTML, JavaScript, PHP, ReactJS</li>
              <li><strong>Proficient:</strong> Scrum, NodeJS, NextJS, Laravel</li>
            </ul>
          </div>

          <h3 className="resume-title">Personal Skills</h3>
          <div className="resume-item">
            <ul>
              <li>Teamwork</li>
              <li>Communication</li>
              <li>Time Management</li>
              <li>Problem Solving</li>
              <li>Fast Learning Ability</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <h3 className="resume-title">Professional Experience</h3>

          <div className="resume-item">
            <h4>Web Development Intern</h4>
            <h5>2022 - 2023</h5>
            <p><em>Dev Evoluer, Sousse</em></p>
            <ul>
              <li>Developed a website building platform (Evoluer Builder) during final year internship</li>
              <li>Implemented core features for web development automation</li>
            </ul>
          </div>

          <div className="resume-item">
            <h4>Academic Project</h4>
            <h5>2024 - 2025</h5>
            <p><em>EPI Digital School, Sousse</em></p>
            <ul>
              <li>Developed an E-learning platform as part of engineering curriculum</li>
              <li>Designed and implemented full-stack solution for online education</li>
            </ul>
          </div>

          <h3 className="resume-title">Projects</h3>
          <div className="resume-item">
            <h4>Industrial Maintenance Website</h4>
            <ul>
              <li><strong>Description:</strong> Company showcase website for industrial maintenance services</li>
              <li><strong>Tools:</strong> ReactJS, CSS</li>
              <li><strong>Link:</strong> <a href="https://louaylh10.github.io/lim_ind.tn/" target="_blank" rel="noopener">View Project</a></li>
            </ul>
          </div>

          <div className="resume-item">
            <h4>E-learning Platform</h4>
            <ul>
              <li><strong>Description:</strong> Online learning platform (Final year project)</li>
              <li><strong>Tools:</strong> NextJS, NodeJS, CSS</li>
              <li><strong>Link:</strong> <a href="https://pfa-project-olive.vercel.app/" target="_blank" rel="noopener">View Project</a></li>
            </ul>
          </div>

          <h3 className="resume-title">Events & Workshops</h3>
          <div className="resume-item">
            <ul>
              <li>
                <strong>Xtreme IEEE</strong> - 24-hour programming event (Problem solving) 
                <br/><em>Issat Sousse (2021-2022)</em>
              </li>
              <li>
                <strong>Google Hashcode</strong> - Programming competition (Team problem solving)
                <br/><em>EPI Sousse (2021-2022)</em>
              </li>
              <li>
                <strong>Nuit d'info</strong> - Problem solving event (Web, Mobile, Cybersecurity)
                <br/><em>EPI Sousse (2023-2024)</em>
              </li>
              <li>
                <strong>Coding Moon</strong> - E-banking themed idea creation event
                <br/><em>EPI Sousse (2023-2024)</em>
              </li>
            </ul>
          </div>

          <h3 className="resume-title">Links</h3>
          <div className="resume-item">
            <ul>
              <li><strong>GitHub:</strong> <a href="https://github.com/louaylh10" target="_blank" rel="noopener">github.com/louaylh10</a></li>
              <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/louay-hcin-128a37240" target="_blank" rel="noopener">linkedin.com/in/louay-hcin</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;