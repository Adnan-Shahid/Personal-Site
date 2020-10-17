import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import me from '../images/me.jpg';


class AboutPanel extends Component {
    render () {
        return (
            <Segment inverted vertical>
                <div className="flexColumn">
                    <div className="panelHeader">
                        <h1>About Me</h1>
                    </div>
                    <div className="separator">A Developer</div>
                    <div className="aboutContainer">
                        <div>
                            <img className="rounded personal" src={me} alt="profilepic"/>
                        </div>
                        <div className="myDescription">
                            <div className="details flexColumn">
                                <span><strong>Name:</strong> Adnan Shahid</span>
                                <span><strong>Age:</strong> 23</span>
                                <span><strong>Location:</strong> Toronto, Ontario, Canada</span>
                            </div>
                            <div className="descriptionContent">
                                <p>I'm a developer with varied experiences, with a stronger focus on web development. I love taking pictures of nature (the header image is a picture I took!), 
                                    exercising and playing video games. I strive to constantly learn and challenge myself to develop my skillset every day! Aside from my passion for programming, 
                                    a fun hobby I enjoy is collecting useless but surprisingly useful things!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Segment>
        )
    }
}

export default AboutPanel;