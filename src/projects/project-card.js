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
      image: project.image,
      description: project.description,
      title: project.title,
      webLink: project.webLink,
      githubLink: project.githubLink,
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
      <div className="project-card-overlay" onClick={()=>{handleProjectOverlay()}}>
        <i className="fas fa-search-plus icon-visible"></i>
        <h2 className="project-card-title">{project.title}</h2>
      </div>
      <img src={project.image} alt="" className="project-card-image"></img>
    </div>
  );
}

export default ProjectCard;
