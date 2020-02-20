import React, { Component} from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

interface State {
    data: Sensor[]
}
class SensorMap extends Component<{},State>{
    init = {
        lat: 60.3846,
        lng: 23.1286377,
        zoom: 13
    }
    
    state = {
        data: []
    }

    async fetchSensors() {
        const response = await fetch('/api/reading');
        const data: Sensor[] = await response.json();
        this.setState({data});
    }

    componentDidMount(){
        this.fetchSensors();
        setInterval(this.fetchSensors.bind(this),5000)
        console.log(this.state.data)
    }
    mapRef = React.createRef();

    render(){
        const {data} = this.state;
        if(data.length === 0) return 'ladataan karttaa..'
        return(
            <Map center={[this.init.lat, this.init.lng]} zoom={this.init.zoom} >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                {
                    data.map(({ga, lat,lng}) => (
                    <Marker position={[lng,lat]}>
                        <Popup> TVOC {ga} lat: {lat} lng: {lng} </Popup>
                    </Marker>
                    )

                )}

            </Map>
        );
    }
}
export default SensorMap;