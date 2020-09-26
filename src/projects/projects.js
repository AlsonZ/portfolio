import React from 'react';
import ProjectCard from './project-card';
import './projects.css';
import portfolioImage from '../imgs/project-images/portfolio.png';
import todolistImage from '../imgs/project-images/todolist.png';
import weatherBundleImage from '../imgs/project-images/weatherbundle-image.PNG';
import conwayImage from '../imgs/project-images/conway-image.PNG';
import exchangeRateImage from '../imgs/project-images/exchange-rate-image.PNG';
import dragAndDropImage from '../imgs/project-images/draganddrop.png';
import imagepalImage from '../imgs/project-images/imagepal.PNG';
import upartsImage from '../imgs/project-images/uparts.png';
import snowytripsImage from '../imgs/project-images/snowytrips.PNG';
import chatroomImage from '../imgs/project-images/chatroom.PNG';

function Projects() {

  const projects = [
    {
      title: "UParts",
      image: upartsImage,
      description: "Using HTML, CSS and Javascript to create a online store selling computer hardware.",
      webLink: "https://alsonz.github.io/ComputerPartsStore/",
      githubLink: "https://github.com/AlsonZ/ComputerPartsStore"
    },
    {
      title: "Imagepal",
      image: imagepalImage,
      description: "Imagepal is a forum where people use images to communicate." +
      "\n This project was based upon my university assignment project idea. " +
      "\n I redesigned and redeveloped the entire project using the MERN stack. It uses node.js, express in the backend with MongoDB as the database and React in the frontend.",
      webLink: "https://imagepal.herokuapp.com/",
      githubLink: "https://github.com/AlsonZ/ImagePal"
    },
    {
      title: "Snowy Trips",
      image: snowytripsImage,
      description: "Travel site using HTML, CSS and javascript",
      webLink: "https://alsonz.github.io/Snowy-Trips/",
      githubLink: "https://github.com/AlsonZ/Snowy-Trips"
    },
    {
      title: "Portfolio",
      image: portfolioImage,
      description: "My portfolio to display what I have learnt and the projects I have created.",
      webLink: "https://alsonz.github.io/portfolio/",
      githubLink: "https://github.com/AlsonZ/portfolio"
    },
    {
      title: "Todo List",
      image: todolistImage,
      description: "A Fullstack Todolist website with login, REST and CRUD operations.",
      webLink: "https://quiet-fjord-80903.herokuapp.com/",
      githubLink: "https://github.com/AlsonZ/fullstack-todolist/"
    },
    {
      title: "Chatroom",
      image: chatroomImage,
      description: "A chatroom created with socket.io along with a room joining link similar to discord.",
      webLink: "https://websocketschatroom.herokuapp.com/room",
      githubLink: "https://github.com/AlsonZ/socket.io-chatroom"
    },
    {
      title: "Weather Bundle",
      image: weatherBundleImage,
      description: "Showing Weather information for Sydney by web scraping 3 sites.",
      webLink: "https://secure-coast-19528.herokuapp.com/",
      githubLink: "https://github.com/AlsonZ/Weather-Bundle"
    },
    {
      title: "Conway's Game of Life",
      image: conwayImage,
      description: "A cellular automaton devised by the British mathematician John Horton Conway in 1970. ",
      webLink: "https://alsonz.github.io/game-of-life/",
      githubLink: "https://github.com/AlsonZ/game-of-life"
    },
    {
      title: "Exchange Rate Calculator",
      image: exchangeRateImage,
      description: "Using the https://exchangeratesapi.io/ API to get the most recent exchange rates.",
      webLink: "https://alsonz.github.io/exchange-rate-calculator/",
      githubLink: "https://github.com/AlsonZ/exchange-rate-calculator"
    },
    {
      title: "Drag and Drop",
      image: dragAndDropImage,
      description: "Using React Beautiful dnd library to creat drag and drop columns and items.",
      webLink: "https://alsonz.github.io/drag-and-drop/",
      githubLink: "https://github.com/AlsonZ/drag-and-drop"
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
