import React, {useState, useEffect} from 'react';
import image from './mountain-top-1080.jpg';
import './project-card.css';

function ProjectCard(props) {

  return (
    <div className="project-card-container">
      <img src={image} alt="image" className="project-card-image"></img>
      <div className="project-card-overlay">
        <h2 className="project-card-title">{props.title}</h2>
        <div className="project-card-actions">
          <a href="#" className="project-card-button project-demo">Demo</a>
          <a href="#" className="project-card-button project-github">Github</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
