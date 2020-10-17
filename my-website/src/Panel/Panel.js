import React, { Component } from 'react';
import { Button, Header, Icon, Segment } from 'semantic-ui-react'


class Panel extends Component {
    render () {
        return (
            <Segment placeholder vertical  style={{ marginTop: '0em' }}>
                <Header icon>
                <Icon name='pdf file outline' />
                No documents are listed for this customer.
                </Header>
                <Button primary>Add Document</Button>
            </Segment>
        )
    }
}

export default Panel;