import React from 'react';
import ScrollTo from 'react-scroll-into-view';
import './home.css';
import icons from "../imgs/icons.svg";

function Home() {
  return (
    <div id="home" className="home-container">
      <div className="hero-image">
        <div className="hero-overlay">
          <div className="home-text">
            <h1 className="title"> HI, I'M ALSON</h1>
            <div className="description">Web Developer</div>
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
