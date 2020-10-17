import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderPanel from './Panel/HeaderPanel.js';
import AboutPanel from './Panel/AboutPanel.js';
import JourneyPanel from './Panel/JourneyPanel.js';


class App extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <HeaderPanel name="Adnan Shahid"></HeaderPanel>
        <AboutPanel></AboutPanel>
        <JourneyPanel></JourneyPanel>
      </div>
    );
  }
}

export default App;
