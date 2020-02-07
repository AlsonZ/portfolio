import React, {useState, useEffect} from 'react';
import ScrollTo from 'react-scroll-into-view';
import Logo from '../imgs/white-logo.png';
import './nav.css';

function Nav() {
  const [nav, setNav] = useState('');
  const [menu, setMenu] = useState('');
  const defaultHighlight = 
  {
    projects: "",
    skills: "",
    about: "",
    contact: ""
  };
  const [highlight, setHighlight] = useState(defaultHighlight);
  useEffect(() => {
    const checkScroll = () => {
      if(window.scrollY > 10) {
        setNav('nav-collapse');
      } else {
        setNav('');
      }
    }
    const checkCurrentView = () => {
      let projectsComponent = document.getElementById('projects').getBoundingClientRect();
      let skillsComponent = document.getElementById('skills').getBoundingClientRect();
      let footerComponent = document.getElementById('footer').getBoundingClientRect();
      if(window.innerHeight - footerComponent.bottom > -100) {
        setHighlight(defaultHighlight);
        setHighlight({...highlight, contact: "highlight"});
      } else if(window.innerHeight - footerComponent.bottom > -300) {
        setHighlight(defaultHighlight);
        setHighlight({...highlight, about: "highlight"});
      } else if(skillsComponent.top < 100) {
        setHighlight(defaultHighlight);
        setHighlight({...highlight, skills: "highlight"});
      } else if(projectsComponent.top < 100) {
        setHighlight(defaultHighlight);
        setHighlight({...highlight, projects: "highlight"});
      }else {
        setHighlight(defaultHighlight);
      }
    }
    checkScroll();
    document.addEventListener('scroll', () => {
      checkScroll();
      checkCurrentView();
    }, {capture: false, passive: true})
    // eslint-disable-next-line
  },[]); 

  const onMenuClick = () => {
    if(menu === "") {
      setMenu('menu-open');
    } else {
      setMenu('');
    }
  }

  return (
    <div id="nav" className={`nav-container ${nav}`}>
      <div className="nav-inner-container">
        <div className="nav-logo">
          <ScrollTo selector='#home' className="logo-container">
            <img src={Logo} alt="logo" className="logo-img"></img>
            ALSON ZHANG
          </ScrollTo>
        </div>
        <div className={`nav-menu ${menu}`}>
        <div onClick={onMenuClick} className="hamburger-box">
          <div className="hamburger"/>
        </div>
        </div>
        <div onClick={onMenuClick} className="nav-links">
          <ScrollTo selector='#projects' className={`nav-items ${highlight.projects}`}>Projects</ScrollTo>
          <ScrollTo selector='#skills' className={`nav-items ${highlight.skills}`}>Skills</ScrollTo>
          <ScrollTo selector='#about' className={`nav-items ${highlight.about}`}>About</ScrollTo>
          <ScrollTo selector='#contact' className={`nav-items ${highlight.contact}`}>Contact</ScrollTo>
        </div>
      </div>
    </div>
  );
}

export default Nav;
