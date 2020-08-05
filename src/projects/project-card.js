import React, { useContext } from 'react';
import { ProjectContext } from '../Contexts/ProjectContext';
import './project-card.css';


function ProjectCard({project}) {

  const [projectContext, setProjectContext] = useContext(ProjectContext);

  
  const handleProjectOverlay = () => {
    const projectToOverlay = {
      isActive: !projectContext.isActive,
      overlayClass: 'overlay-active',
      contentOverlayClass: '',
      backdropActiveClass: '',
    }
    if(projectContext.isActive) {
      projectToOverlay.overlayClass = '';
      projectToOverlay.contentOverlayClass = 'content-overlay-active';
      projectToOverlay.backdropActiveClass = 'backdrop-active';
    }
    setProjectContext(projectToOverlay);
  }

  return (
    <div className="project-card-container">
      <img src={project.image} alt="" className="project-card-image"></img>
      <div className="project-card-overlay">
        <h2 className="project-card-title">{project.title}</h2>
        <p className="project-card-desc" onClick={()=>{handleProjectOverlay()}}>{project.description}</p>
        <div className="project-card-actions">
          <a href={project.webLink} className="project-card-button project-demo">Website</a>
          <a href={project.githubLink} className="project-card-button project-github">Github</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
