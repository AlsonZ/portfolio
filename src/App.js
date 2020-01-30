import React from 'react';
import Nav from './nav/nav.js'
import Home from './home/home.js'
import Projects from './projects/projects.js'
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Nav/>
      <Home/>
      <Projects/>
    </div>
  );
}

export default App;
