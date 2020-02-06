import React from 'react';
import Nav from './nav/nav.js'
import Home from './home/home.js'
import Projects from './projects/projects.js'
import Skills from './skills/skills.js'
import About from './about/about.js'
import Contact from './contact/contact.js'
import Footer from './footer/footer.js'
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Nav/>
      <Home/>
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
