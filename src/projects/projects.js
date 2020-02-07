import React from 'react';
import ProjectCard from './project-card';
import './projects.css';
import todolistImage from '../imgs/project-images/TodoList-project.PNG';

function Projects() {

  const projects = [
    {
      title: "Todo List",
      image: todolistImage,
      demoLink: "https://quiet-fjord-80903.herokuapp.com/",
      githubLink: "https://github.com/AlsonZ/fullstack-todolist/"
    },
  ]

  return (
    <div id="projects"className="projects-container">
      <h1 className="projects-title">My Work</h1>
      <div className="projects-row-container">
        {projects.map((project,index) => 
          <ProjectCard key={index} title={project.title} image={project.image} demoLink={project.demoLink} githubLink={project.githubLink}/>
        )}
      </div>
    </div>
  );
}

export default Projects;
