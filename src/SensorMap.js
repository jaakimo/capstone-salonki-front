import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';



// interface Props {
//   isLoading: boolean,
//   data: Sensor[],
//   error: any
// }

const init = {
    lat: 60.3846,
    lng: 23.1286377,
    zoom: 13
}

function getHots(data){
    const res = [];
    for (let index = 0; index < data.length; index++) {
        res.push([data[index].lng,data[index].lat,data[index].ga]);
    }
    return res;
}

const SensorMap = ({ isLoading, data, error }) => (

    <Map  center={[init.lat, init.lng]} zoom={init.zoom} >
        {
            error ? error : (
                <>
                    <HeatmapLayer
                    fitBoundsOnLoad={true}
                    fitBoundsOnUpdate={false}
                    points={getHots(data)}
                    gradient={ {0.1:'blue',
                     0.5: 'orange',
                     0.8: 'red' }}
                    radius={50}
                    longitudeExtractor={(m) => parseFloat(m[1])}
                    latitudeExtractor={(m) => parseFloat(m[0])}
                    intensityExtractor={(m) => parseFloat(m[2])}
                    
                    />
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    {
                        data.map(({ sensor, ga, lat, lng }) => (
                            <Marker position={[lng, lat]}>
                                <Popup> Sensori: {sensor} TVOC {ga} lat: {lat} lng: {lng} </Popup>
                            </Marker>
                        ))
                    }
                </>
            )
        }

    </Map>
);


export default SensorMap;