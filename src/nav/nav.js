import React, {useState, useEffect, useRef} from 'react';
import ScrollTo from 'react-scroll-into-view';
import './nav.css';

function Nav() {
  const [nav, setNav] = useState('');
  const navEle = useRef(null);
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

  return (
    <div ref={navEle} id="nav" className={`nav-container ${nav}`}>
      <ScrollTo selector='#home' className="nav-items">Home</ScrollTo>
      <ScrollTo selector='#projects' className="nav-items">Projects</ScrollTo>
    </div>
  );
}

export default Nav;
