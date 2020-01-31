import React, {useState, useEffect} from 'react';
import ProjectCard from './project-card';
import './projects.css';

function Projects() {

  const [title, setTitle] = useState('');
  const [angle, setAngle] = useState('');

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if(window.scrollY > 50) {
        setTitle('projects-title-visible');
        setAngle('angle-end');
      } else {
        setTitle('');
        setAngle('');
      }
    }, {capture: false, passive: true})
  },[]);

  return (
    <div className="projects-outer-container">
      <div id="projects" className="projects-id-container"></div>
      <div className={"projects-container " + angle}>
        <h2 className={"projects-title "+ title}>Projects</h2>
        <ProjectCard title="Todo List"/>
      </div>
    </div>
  );
}

export default Projects;
