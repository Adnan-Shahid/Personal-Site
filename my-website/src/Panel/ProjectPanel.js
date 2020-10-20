import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import TapHero from '../images/TapHero.jpg';
import tron from '../images/tron.png';
import stickavalanche from '../images/stickavalanche.png';
import StudyBuddies from '../images/StudyBuddies.png';
import Project from '../Projects/Project.js';

class AboutPanel extends Component {
    render () {
        return (
            <Segment inverted vertical>
                <div className="flexColumn centerItems center pushDown">
                    <div className="panelHeader"><h1>Projects</h1></div>
                    <div className="divider"></div>
                    <div className="flexColumn centerItems center">
                        <div className="responsiveFlexRow centerItems center rowLimit">
                            <div>
                                <Project 
                                    title="Study Buddies" 
                                    tools="MongoDB, Express, React, Node.js" 
                                    link="https://github.com/Adnan-Shahid/StudyBuddies" 
                                    image={StudyBuddies}
                                    description="An online collaborative notebook that allows students to upload both typed and handwritten notes that will convert them into text using image recognition/natural language processing."
                                />
                                <Project 
                                    title="Tap Hero"
                                    tools="Java"
                                    link="https://github.com/Adnan-Shahid/TapHero"
                                    image={TapHero}
                                    description="A GUI focused tap game where the player continually fights bosses against a timer, upgrading themselves along the way"
                                />
                            </div>
                            <div>
                                <Project 
                                    title="Stick Destroyer" 
                                    tools="C#" 
                                    link="https://github.com/Adnan-Shahid/Stick_Destroyer" 
                                    image={stickavalanche}
                                    description="A GUI based game involving a player dodging various types of obstacles to survive and eventually defeat an AI to beat the game"
                                />
                                <Project 
                                    title="Tron" 
                                    tools="Verilog" 
                                    link="https://github.com/Adnan-Shahid/Tron-Game-Hardware" 
                                    image={tron}
                                    description="A 2D, 2 player tron cycle game created using an FPGA board, utilizing a wired up breadboard to create functional controllers"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Segment>
        )
    }
}

export default AboutPanel;