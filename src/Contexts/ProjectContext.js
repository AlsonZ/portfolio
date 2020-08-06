import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
  const [project, setProject] = useState({
    isActive: false,
    overlayClass: '',
    contentOverlayClass: '',
    backdropActiveClass: '',
    image: '',
    description: '',
    title: '',
    webLink: '',
    githubLink: '',
  });

  const setProjectWithOverlayDelay = (stuff) => {
    if(project.isActive) {
      console.log(stuff);
      setProject({
        isActive: true,
        overlayClass: 'overlay-active',
        contentOverlayClass: stuff.contentOverlayClass,
        backdropActiveClass: stuff.backdropActiveClass,
        image: stuff.image,
        description: stuff.description,
        title: stuff.title,
        webLink: stuff.webLink,
        githubLink: stuff.githubLink,
      });
      setTimeout(() => {
        setProject({
          isActive: stuff.isActive,
          overlayClass: stuff.overlayClass,
          contentOverlayClass: '',
          backdropActiveClass: '',
          image: '',
          description: '',
          title: '',
          webLink: '',
          githubLink: '',
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