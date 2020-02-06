import React from 'react';
import icons from "../imgs/icons.svg";
import './skills.css';

function Skills(props) {

  const webSkills = [
    { name: "HTML5", svgName: "#icon-html5"},
    { name: "CSS3", svgName: "#icon-css3"},
    { name: "Javascript", svgName: "#icon-javascript"},
    { name: "NodeJS", svgName: "#icon-node-js"},
    { name: "React", svgName: "#icon-react"},
    { name: "MongoDB", svgName: "#icon-mongodb"},
  ];
  const mobileSkills = [
    { name: "Swift", svgName: "#icon-swift"},
    { name: "Android", svgName: "#icon-android"},
  ];
  const appSkills = [
    { name: "Java", svgName: "#icon-java"},
    { name: "C++", svgName: "#icon-c-plus-plus"},
  ];

  const showColumns = (name, array) => {
      return (
        <div className="skills-column">
          <h1 className="skills-category-title">{name}</h1>
          <div className="skills-svg-container">
            {array.map((svg, i) => 
              <div key={i} className="skills-card">
                <svg className="skills-svg">
                  <use href={`${icons}${svg.svgName}`}/>
                </svg>
                <h1 className="skills-svg-name">{svg.name}</h1>
              </div>
            )}
          </div>
        </div>
      )
  }

  return (
    <div id="skills" className="skills-container">
      <h1 className="skills-title">What I Have Learned</h1>
      <div className="skills-row">
        {showColumns("Web",webSkills)}
        {showColumns("Mobile", mobileSkills)}
        {showColumns("Applications", appSkills)}
      </div>
    </div>
  );
}

export default Skills;
