import React from 'react';
import Programming from '../imgs/programming-graphic.svg';
import './about.css';

function About() {
  return (
    <div id="about" className="about-container">
      <div className="about-inner-container">
        <h1 className="about-title">A Little Bit About Me</h1>
        <img src={Programming} alt="Programming" className="about-image"/>
        <p className="about-description">
          Hello! My name is Alson, a web developer 
          who is currently pursuing a bachelor of Business 
          and Bachelor of Science in Information Technology,
          majoring in Enterprise Software Development and Finance at the 
          <a href="https://www.uts.edu.au" className="about-link"> University of Technology Sydney</a>
          <br/>
          I always aim to improve my knowledge in software development 
          and work to achieve this goal in my spare time. 
        </p>
      </div>
      
    </div>
  );
}

export default About;
