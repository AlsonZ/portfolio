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

  const setProjectWithOverlayDelay = (projectDetails) => {
    if(project.isActive) {
      setProject({
        isActive: true,
        overlayClass: 'overlay-active',
        contentOverlayClass: projectDetails.contentOverlayClass,
        backdropActiveClass: projectDetails.backdropActiveClass,
        image: projectDetails.image,
        description: projectDetails.description,
        title: projectDetails.title,
        webLink: projectDetails.webLink,
        githubLink: projectDetails.githubLink,
      });
      setTimeout(() => {
        setProject({
          isActive: projectDetails.isActive,
          overlayClass: projectDetails.overlayClass,
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
      setProject(projectDetails);
    }
  }

  return (
    <ProjectContext.Provider value={[project, setProjectWithOverlayDelay]}>
      {props.children}
    </ProjectContext.Provider>
  )
}