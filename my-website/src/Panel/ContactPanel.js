import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import '../Panel/Panel.css';
import git from '../images/github.png';
import linkedin from '../images/linkedin.png';
import email from '../images/send.png';




class ContactPanel extends Component {
    render () {
        return (
            <Segment vertical>
                <div className="flexColumn centerItems center">
                    <div className="panelHeader"><h1>Contact Me</h1></div>
                    <div className="divider"></div>
                    <div className="responsiveFlexRow contact center centerItems">
                        <a href="https://www.linkedin.com/in/adnan-shahid/"><img className="" src={linkedin} alt="Linkedin - Adnan Shahid"/></a>
                        <a href="mailto:adnan.shahid@mail.utoronto.ca"><img className="" src={email} alt="Email Adnan Shahid"/></a>
                        <a href="https://github.com/Adnan-Shahid"><img className="" src={git} alt="Adnan Shahid Git"/></a>
                    </div>
                </div>
            </Segment>
        )
    }
}

export default ContactPanel;