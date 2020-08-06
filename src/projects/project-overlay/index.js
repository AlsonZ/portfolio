import React, { useContext, useRef, useEffect } from 'react';
import { ProjectContext } from '../../Contexts/ProjectContext';
import './style.css'

const ProjectOverlay = () => {

  const [projectContext, setProjectContext] = useContext(ProjectContext);
  const contentRef = useRef(null);
  const backdropRef = useRef(null);

  const projectToOverlay = {
    isActive: !projectContext.isActive,
    overlayClass: '',
    contentOverlayClass: 'content-overlay-active',
    backdropActiveClass: 'backdrop-active',
    image: projectContext.image,
    description: projectContext.description,
    title: projectContext.title,
    webLink: projectContext.webLink,
    githubLink: projectContext.githubLink,
  }

  useEffect(() => {
   backdropRef.current.style.height = `${contentRef.current.clientHeight+100}px`;
  },[projectContext, window.orientation])

  return (
    <>
      {<div className={`project-overlay ${projectContext.overlayClass}`} >
        <div className={`backdrop ${projectContext.backdropActiveClass}`} id="backdrop" ref={backdropRef} style={{height: 'auto'}} onClick={()=>{setProjectContext(projectToOverlay)}}>
        </div>
        <div className={`content-box ${projectContext.contentOverlayClass}`} ref={contentRef}>
          <div className="modal-header">
            <span className="project-title">
              {projectContext.title}
            </span>
            <span className="close-modal-icon" onClick={()=>{setProjectContext(projectToOverlay)}}>
              <i className="fas fa-times"></i>
            </span>
          </div>
          <div className="modal-image-container">
            <img className="modal-image" src={projectContext.image}/>
          </div>
          <div className="modal-description">
            {projectContext.description}
          </div>
          <div className="modal-link-container">
            <a href={projectContext.webLink} target="_blank" className="modal-link">Website</a>
            <a href={projectContext.githubLink} target="_blank" className="modal-link">Github</a>
          </div>
        </div>
      </div>}
    </>
  )
}

export default ProjectOverlay;