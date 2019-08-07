import React, { Component } from 'react';
import { Row, Col, Container, Jumbotron } from 'reactstrap';

class Index extends Component {
    state = {  }
    render() {
        return (
            <div className="h-100">
                <Jumbotron fluid className="h-100 my-0">
                    <Container fluid className="h-100">
                        <Row className="h-100">
                            <Col className="align-self-end">
                                <h1 className="display-3 text-white"><strong>do.</strong></h1>
                                {/* <hr className="my-4 bg-white" />
                                <p className="lead text-light">A platform to do.</p> */}
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Index;