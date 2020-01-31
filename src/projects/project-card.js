import React, {useState, useEffect} from 'react';
import image from './mountain-top-1080.jpg';
import './project-card.css';

function ProjectCard(props) {

  const onClickDemo = () => {
    
  }
  const onClickGithub = () => {
    
  }

  return (
    <div className="project-card-container">
      <img src={image} alt="image" className="project-card-image"></img>
      <h2 className={"project-card-title"}>{props.title}</h2>
      <div className="project-card-actions">
        <button onClick={onClickDemo} className="project-card-button">Demo</button>
        <button onClick={onClickGithub} className="project-card-button">Github</button>
      </div>
    </div>
  );
}

export default ProjectCard;
