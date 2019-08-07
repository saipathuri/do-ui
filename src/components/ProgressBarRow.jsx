import React, { Component } from 'react';
import { Row, Col, Progress } from 'reactstrap';

class ProgressBarCol extends Component {
    state = {  }
    getColor(value, max){
        const div = value/max;
        if(div < .33){
            return "success";
        } else if (div < .66){
            return "warning";
        } else{
            return "danger";
        }
    }
    render() {
        const { value, settings } = this.props;
        return (
            <div>
                <Row>
                    <Col xs='4' sm='3' className="pr-0">
                        <div className="text-left">{settings.display}</div>
                    </Col>
                    <Col xs='4' sm='6' className="p-0">
                        <Progress color={this.getColor(value, settings.max)} max={settings.max} value={value} />
                    </Col>
                    <Col xs='4' sm='3' className="pl-0">
                        <div className="text-right" >{value}{settings.unit}</div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ProgressBarCol;