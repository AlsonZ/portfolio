import React from 'react';
import ProjectCard from './project-card';
import './projects.css';
import portfolioImage from '../imgs/project-images/portfolio-image.PNG';
import todolistImage from '../imgs/project-images/todolist-image.PNG';
import weatherBundleImage from '../imgs/project-images/weatherbundle-image.PNG';
import conwayImage from '../imgs/project-images/conway-image.PNG';
import exchangeRateImage from '../imgs/project-images/exchange-rate-image.PNG';

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
      description: "A Fullstack Todolist website with login, REST and CRUD operations",
      webLink: "https://quiet-fjord-80903.herokuapp.com/",
      githubLink: "https://github.com/AlsonZ/fullstack-todolist/"
    },
    {
      title: "Weather Bundle",
      image: weatherBundleImage,
      description: "Showing Weather information for Sydney by web scraping 3 sites",
      webLink: "https://secure-coast-19528.herokuapp.com/",
      githubLink: "https://github.com/AlsonZ/Weather-Bundle"
    },
    {
      title: "Conway's Game of Life",
      image: conwayImage,
      description: "A cellular automaton devised by the British mathematician John Horton Conway in 1970 ",
      webLink: "https://alsonz.github.io/game-of-life/",
      githubLink: "https://github.com/AlsonZ/game-of-life"
    },
    {
      title: "Exchange Rate Calculator",
      image: exchangeRateImage,
      description: "Using the https://exchangeratesapi.io/ API to get the most recent exchange rates",
      webLink: "https://alsonz.github.io/exchange-rate-calculator/",
      githubLink: "https://github.com/AlsonZ/exchange-rate-calculator"
    },
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
