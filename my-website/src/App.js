import React, { Component } from 'react';
import './App.css';
import HeaderPanel from './Panel/HeaderPanel.js';
import AboutPanel from './Panel/AboutPanel.js';
import JourneyPanel from './Panel/JourneyPanel.js';
import ProjectPanel from './Panel/ProjectPanel.js';
import ContactPanel from './Panel/ContactPanel.js';
import { Button, Icon, Segment, Sidebar } from 'semantic-ui-react'
import { Element, scroller } from 'react-scroll';

const HorizontalSidebar = () => (
  <Sidebar
    className="appear"
    as={Segment}
    animation='overlay'
    direction='top'
    visible={true}
  >
    <div className="flexColumn">asdasd</div>
  </Sidebar>
)

class App extends Component {
  state = {
    scrollCount: 0,
  }

  scrollUp() {
    if (this.state.scrollCount > 0) {
        this.setState({
          scrollCount: this.state.scrollCount - 1
      }, () => {
          this.scroll();
      });
    } else {
      this.scroll();
    }
  }

  scrollDown() {
    if (this.state.scrollCount < 4) {
        this.setState({
          scrollCount: this.state.scrollCount + 1
      }, () => {
          this.scroll();
      });
    }
    else {
      this.scroll();
    }
  }

  scroll() {
    scroller.scrollTo(this.state.scrollCount.toString(), {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

 
  

  render() {
    return (
      <div>
        <div className="flexColumn sticky">
          <Button className="nav" color="vk" onClick={() => this.scrollUp()}><Icon className="noMargin" name='angle up'/></Button>
          <Button className="nav" color="vk" onClick={() => this.scrollDown()}><Icon className="noMargin" name='angle down'/></Button>
        </div>
        {/* <div className="flexColumn stickyMobile">
          <Button className="nav" color="vk" onClick={() => this.scrollUp()}><Icon className="noMargin" name='bars'/></Button>
        </div> */}
        <Element className="whiteFix" name="0">
          <HeaderPanel name="Adnan Shahid"></HeaderPanel>
        </Element>
        <Element name="1">
          <AboutPanel/>
        </Element>
        <Element name="2">
          <JourneyPanel/>
        </Element>
        <Element name="3">
          <ProjectPanel/>
        </Element>
        <Element name="4">
          <ContactPanel/>
        </Element>
        
      </div>
    );
  }
}

export default App;
