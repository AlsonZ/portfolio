import React from 'react';
import icons from "../imgs/icons.svg";
import './contact.css';

function Contact() {

  return (
    <div id="contact" className="contact-container">
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-description">Feel free to contact me with any inquiries you may have!</p>
      <div className="contact-svg-container">
        <svg className="contact-svg">
          <use href={`${icons}#icon-github`}/>
        </svg>
        <svg className="contact-svg">
          <use href={`${icons}#icon-linkedin`}/>
        </svg>
        <svg className="contact-svg">
          <use href={`${icons}#icon-envelop`}/>
        </svg>
      </div>
    </div>
  );
}

export default Contact;
