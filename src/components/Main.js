import React from 'react';
import { ReactTyped } from 'react-typed';
import "../App.css";

function Main() {
  return (
    <section id="hero" className="hero section light-background">
      <h2>Louay Hcine</h2>
      <p>
        &nbsp; I'm{' '}
        <ReactTyped
          strings={["Web Designer", "Web Developer", "Freelancer", "Software Engineer"]}
          typeSpeed={100}
          backSpeed={50}
          backDelay={2000}
          loop
        />
      </p>
    </section>
  );
}

export default Main;
