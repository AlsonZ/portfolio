import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
  const [project, setProject] = useState({
    isActive: false,
    overlayClass: '',
  });

  return (
    <ProjectContext.Provider value={[project, setProject]}>
      {props.children}
    </ProjectContext.Provider>
  )
}