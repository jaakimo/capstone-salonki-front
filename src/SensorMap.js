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

const SensorMap = ({ isLoading, data, error }) => (

    <Map  center={[init.lat, init.lng]} zoom={init.zoom} >
        {
            error ? error : (
                <>
                    <HeatmapLayer
                    fitBoundsOnLoad
                    fitBoundsOnUpdate
                    points={[[60.3851, 23.1214, "73"],[60.3803, 23.1321, "928"]]}
                    longitudeExtractor={(m) => m[1]}
                    latitudeExtractor={(m) => m[0]}
                    intensityExtractor={(m) => parseFloat(m[2])} />
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