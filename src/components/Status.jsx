import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect, disconnect } from '../utils/api';
import DataCard from './DataCard';

class Status extends Component {
    constructor(props){
        super(props);
        this.state = {data: {}}
        // this.connectSocketToComponent();
    }

    componentDidMount() {
        this.connectSocketToComponent();
    }

    componentWillUnmount() {
        disconnect(this.state.socket);
    }

    connectSocketToComponent() {
        const socket = connect((err, data) => this.process(data.data));
        this.setState({"socket": socket});
    }

    process = (data) => {
        this.setState({
            data: {
                ...this.state.data,
                [data.hostname]: data
            }
        });
    }
    state = {  }
    render() {
        return (
            <Container>
                <Row>
                    {Object.keys(this.state.data).map((key) => {
                        return <Col xs="12" md="6" lg='4' key={this.state.data[key].hostname} >
                            <DataCard data={this.state.data[key]} key={this.state.data[key].hostname} />
                        </Col>
                    })}
                </Row>
            </Container>
        );
    }
}

export default Status;