import React from 'react';
import './project-card.css';

function ProjectCard(props) {

  return (
    <div className="project-card-container">
      <img src={props.image} alt="" className="project-card-image"></img>
      <div className="project-card-overlay">
        <h2 className="project-card-title">{props.title}</h2>
        <div className="project-card-actions">
          <a href={props.demoLink} className="project-card-button project-demo">Demo</a>
          <a href={props.githubLink} className="project-card-button project-github">Github</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
