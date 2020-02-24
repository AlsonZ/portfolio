import React from 'react';
import ProjectCard from './project-card';
import './projects.css';
import todolistImage from '../imgs/project-images/todolist-image.PNG';
import weatherBundleImage from '../imgs/project-images/weatherbundle-image.PNG';
import portfolioImage from '../imgs/project-images/portfolio-image.PNG';

function Projects() {

  const projects = [
    {
      title: "Portfolio",
      image: portfolioImage,
      description: "My portfolio to display what I have learnt and can accomplish",
      webLink: "https://alsonz.github.io/portfolio/",
      githubLink: "https://github.com/AlsonZ/portfolio"
    },
    {
      title: "Todo List",
      image: todolistImage,
      description: "A Fullstack Todolist website with login REST, and CRUD operations",
      webLink: "https://quiet-fjord-80903.herokuapp.com/",
      githubLink: "https://github.com/AlsonZ/fullstack-todolist/"
    },
    {
      title: "Weather Bundle",
      image: weatherBundleImage,
      description: "Showing Weather information for Sydney by web scraping 3 sites",
      webLink: "https://secure-coast-19528.herokuapp.com/",
      githubLink: "https://github.com/AlsonZ/Weather-Bundle"
    }
  ]

  return (
    <div id="projects"className="projects-container">
      <h1 className="projects-title">My Work</h1>
      <div className="projects-row-container">
        {projects.map((project,index) => 
          <ProjectCard key={index} project={project}/>
        )}
      </div>
    </div>
  );
}

export default Projects;