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
  }

  useEffect(() => {
   backdropRef.current.style.height = `${contentRef.current.clientHeight+100}px`;
  },[])

  return (
    <>
      {projectContext.isActive && <div className="project-overlay" >
        <div className="backdrop" id="backdrop" ref={backdropRef} style={{height: 'auto'}} onClick={()=>{setProjectContext(projectToOverlay)}}>
        </div>
        <div className="content-box" ref={contentRef}>
          box for content
        </div>
      </div>}
    </>
  )
}

export default ProjectOverlay;