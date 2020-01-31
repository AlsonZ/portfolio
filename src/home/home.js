import React, {useState, useEffect} from 'react';
import ScrollTo from 'react-scroll-into-view';
import './home.css';
import icons from "../imgs/icons.svg";

function Home() {

  // const [angle, setAngle] = useState('');


  // useEffect(() => {
  //   document.addEventListener('scroll', () => {
  //     // maybe add a timer here to prevent so many calls
  //     if(window.scrollY > 50) {
  //         setAngle('angle-end');
  //     } else {
  //       setAngle('');
  //     }
  //   }, {capture: false, passive: true})
  // },[]);

  return (
  <div id="home" className={"home-container " /*+ angle*/}>
      <div className="hero-image">
        <div className="hero-overlay">
          <div className="home-text">
            <h1 className="home-title"> HI, I'M ALSON</h1>
            <div className="home-description">Web Developer</div>
            <div className="home-arrow-container">
              <ScrollTo selector='#projects'>
                <svg className="expand-more-icon">
                  <use xlinkHref={`${icons}#icon-expand-more`} />
                </svg>
              </ScrollTo>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
