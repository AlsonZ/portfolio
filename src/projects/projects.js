import React from 'react';
import ProjectCard from './project-card';
import './projects.css';

function Projects() {

  return (
    <div id="projects"className="projects-container">
      <h1 className="projects-title">My Work</h1>
      <div className="projects-row-container">
        <ProjectCard title="Todo List"/>
        <ProjectCard title="Todo List"/>
        <ProjectCard title="Todo List"/>
        <ProjectCard title="Todo List"/>
        <ProjectCard title="Todo List"/>
        <ProjectCard title="Todo List"/>
        <ProjectCard title="Todo List"/>
      </div>
    </div>
  );
}

export default Projects;
