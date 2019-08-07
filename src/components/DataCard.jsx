import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter } from 'reactstrap';
import ProgressBarRow from './ProgressBarRow';


class DataCard extends Component {
    state = {  }
    
    render() {
        const { data } = this.props;
        const progressItems = {
            'cpu':{unit: '%', max: 100, display: "CPU"}, 
            'mem':{unit: '%', max: 100, display: "Memory"}, 
            'disk':{unit: '%', max: 100, display: "Disk"}, 
            'temp':{unit: "ºC", max: 60, display: "Temp."}
        };
        return (
            <div className="py-3">
                <Card>
                    <CardHeader>{data.hostname}</CardHeader>
                    <CardBody>
                        { Object.keys(progressItems).map((key) => {
                            return <ProgressBarRow value={data[key]} settings={progressItems[key]} key={data.hostname+key} />
                        })}
                    </CardBody>
                    <CardFooter className="py-1">
                        <h6> <small>Architecture: {data.arch}</small> <br/> <small>OS: {data.os}</small></h6>
                    </CardFooter>
                </Card>
            </div>
        );
    }
}

export default DataCard;