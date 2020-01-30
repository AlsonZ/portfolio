import React, {useState, useEffect} from 'react';
import ScrollTo from 'react-scroll-into-view';
import './nav.css';

function Nav() {
  const [nav, setNav] = useState('');
  const [menu, setMenu] = useState('');
  useEffect(() => {
    document.addEventListener('scroll', () => {
      // maybe add a timer here to prevent so many calls
      if(window.scrollY > 10) {
        setNav('nav-collapse');
      } else {
        setNav('');
      }
    }, {capture: false, passive: true})
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
          <ScrollTo selector='#home' className="logo">Home</ScrollTo>
        </div>
        <div className={`nav-menu ${menu}`}>
        <div onClick={onMenuClick} className="hamburger-box">
          <div className="hamburger"/>
        </div>
        </div>
        <div onClick={onMenuClick} className="nav-links">
          <ScrollTo selector='#projects' className="nav-items">Projects</ScrollTo>
          <ScrollTo selector='#skills' className="nav-items">Skills</ScrollTo>
          <ScrollTo selector='#contact' className="nav-items">About</ScrollTo>
          <ScrollTo selector='#contact' className="nav-items">Contact</ScrollTo>
        </div>
        {/* <ScrollTo selector='#home' className="nav-items">Home</ScrollTo> */}
        {/* <ScrollTo selector='#projects' className="nav-items">Projects</ScrollTo> */}
      </div>
    </div>
  );
}

export default Nav;
