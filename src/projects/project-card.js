import React from 'react';
import './project-card.css';

function ProjectCard({project}) {

  return (
    <div className="project-card-container">
      <img src={project.image} alt="" className="project-card-image"></img>
      <div className="project-card-overlay">
        <h2 className="project-card-title">{project.title}</h2>
        <p className="project-card-desc">{project.description}</p>
        <div className="project-card-actions">
          <a href={project.webLink} className="project-card-button project-demo">Website</a>
          <a href={project.githubLink} className="project-card-button project-github">Github</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
