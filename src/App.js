import React, { useContext, useEffect } from 'react';
import Nav from './nav/nav.js'
import Home from './home/home.js'
import Projects from './projects/projects.js'
import Skills from './skills/skills.js'
import About from './about/about.js'
import Contact from './contact/contact.js'
import Footer from './footer/footer.js'
import ProjectOverlay from './projects/project-overlay';
import { ProjectContext } from './Contexts/ProjectContext';
import './App.css';

function App() {

  const [project] = useContext(ProjectContext);

  useEffect(() => {
    if(project.isActive) {
      document.body.style.overflow = 'hidden';
      // document.body.style.paddingRight = '15px'; 
    } else {
      document.body.style.overflow = '';
      // document.body.style.paddingRight = '0'; 
    }
  },[project])

  return (
    // <div className={`app-container ${project.overlayClass}`}>
    <div className={`app-container `}>
        <Nav/>
        <Home/>
        <Projects/>
        <Skills/>
        <About/>
        <Contact/>
        <Footer/>
        {/* {project.isActive && <ProjectOverlay/>} */}
        {<ProjectOverlay/>}
    </div>
  );
}

export default App;
