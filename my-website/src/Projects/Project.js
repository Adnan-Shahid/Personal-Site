import React, { Component } from 'react'
import '../Panel/Panel.css';
import { Dimmer, Image } from 'semantic-ui-react'


export default class Project extends Component {
    state = {}

    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })

    render () {
        const { active } = this.state;

        const content = (
            <div className="flexColumn projectDescription">
              <p>Tools Used: {this.props.tools}</p>
              <p>Description: {this.props.description}</p>
              <p className="pointer"><a href={this.props.link}>Github</a></p>
            </div>
        )

        return (
            <div className="carded flexColumn">
                <Dimmer.Dimmable
                    as={Image}
                    dimmed={active}
                    dimmer={{ active, content }}
                    onMouseEnter={this.handleShow}
                    onMouseLeave={this.handleHide}
                    size='large'
                    src={this.props.image}
                    id="dimmed"
                />
                <h3 className="projectHeader">{this.props.title}</h3>
            </div>
        )
    }  
}


