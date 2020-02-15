import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

interface State {
    data: Sensor[]
}

class SensorTable extends Component{
    state = {
        data: []
    };

    async fetchSensors() {
        const response = await fetch('http://capstonesalonki.herokuapp.com/api/reading');
        const data: Sensor[] = await response.json();
        this.setState({data});
    }

    componentDidMount(){

        this.fetchSensors();
        setInterval(this.fetchSensors.bind(this),5000)

    }


    render(){
        const {data} = this.state;
        if (data.length === 0 ){
            return 'Ladataan sensoreita'
        }
        return(
            <Table striped bordered hover>
                <thead>
                    <th>Nimi</th>
                    <th>TVOC (ppm)</th>
                    <th>Co2 (ppm)</th>
                    <th>Lämpötila (°C)</th>
                    <th>Ilmanpaine (kPa)</th>
                    <th>Ilmankosteus (%)</th>
                </thead>
                <tbody>
                
                {
                    data.map(({sensor, ga, gb ,gx ,gy ,gz }) => (
                        <tr key={sensor}>
                            <td>{sensor}</td>  
                            <td>{ga}</td>
                            <td>{gb}</td>
                            <td>{gx}</td>
                            <td>{gy}</td>
                            <td>{gz} </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        );
    }
}

export default SensorTable;