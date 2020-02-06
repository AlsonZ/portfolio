import React from 'react';
import icons from "../imgs/icons.svg";
import './contact.css';

function Contact() {

  return (
    <div id="contact" className="contact-container">
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-description">Feel free to contact me with any inquiries you may have!</p>
      <div className="contact-svg-container">
        <a href="https://github.com/AlsonZ">
          <svg className="contact-svg">
            <use href={`${icons}#icon-github`}/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/alson-zhang/">
          <svg className="contact-svg">
            <use href={`${icons}#icon-linkedin`}/>
          </svg>
        </a>
        <a href="mailto:ayzcode@gmail.com">
          <svg className="contact-svg">
            <use href={`${icons}#icon-envelop`}/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Contact;
