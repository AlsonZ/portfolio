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
  }

  useEffect(() => {
   backdropRef.current.style.height = `${contentRef.current.clientHeight+100}px`;
  },[])

  return (
    <>
      {<div className={`project-overlay ${projectContext.overlayClass}`} >
        <div className={`backdrop ${projectContext.backdropActiveClass}`} id="backdrop" ref={backdropRef} style={{height: 'auto'}} onClick={()=>{setProjectContext(projectToOverlay)}}>
        </div>
        <div className={`content-box ${projectContext.contentOverlayClass}`} ref={contentRef}>
          box for content
        </div>
      </div>}
    </>
  )
}

export default ProjectOverlay;