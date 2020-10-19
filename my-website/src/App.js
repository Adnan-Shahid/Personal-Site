import React, { Component } from 'react';
import './App.css';
import HeaderPanel from './Panel/HeaderPanel.js';
import AboutPanel from './Panel/AboutPanel.js';
import JourneyPanel from './Panel/JourneyPanel.js';
import ProjectPanel from './Panel/ProjectPanel.js';
import ContactPanel from './Panel/ContactPanel.js';


class App extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <HeaderPanel name="Adnan Shahid"></HeaderPanel>
        <AboutPanel/>
        <JourneyPanel/>
        <ProjectPanel/>
        <ContactPanel/>
      </div>
    );
  }
}

export default App;
