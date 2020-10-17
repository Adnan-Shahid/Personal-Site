import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react'
import sky from '../images/dasky.jpg';
import './Panel.css';


class HeaderPanel extends Component {
    render () {
        return (
            <Segment id="header-bg" placeholder vertical style={{ backgroundImage: `url(${sky})` }}>
                <Header size='huge' as='h1' icon>
                    {this.props.name}
                </Header>
            </Segment>
        )
    }
}

export default HeaderPanel;