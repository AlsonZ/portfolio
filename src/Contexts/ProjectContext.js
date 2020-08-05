import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
  const [project, setProject] = useState({
    isActive: false,
    overlayClass: '',
    contentOverlayClass: '',
    backdropActiveClass: '',
  });

  const setProjectWithOverlayDelay = (stuff) => {
    if(project.isActive) {
      setProject({
        isActive: true,
        overlayClass: 'overlay-active',
        contentOverlayClass: stuff.contentOverlayClass,
        backdropActiveClass: stuff.backdropActiveClass,
      });
      setTimeout(() => {
        setProject({
          isActive: stuff.isActive,
          overlayClass: stuff.overlayClass,
          contentOverlayClass: '',
          backdropActiveClass: '',
        });
      },200)
    } else {
      setProject(stuff);
    }
  }

  return (
    <ProjectContext.Provider value={[project, setProjectWithOverlayDelay]}>
      {props.children}
    </ProjectContext.Provider>
  )
}