import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';


// interface Props {
//   isLoading: boolean,
//   data: Sensor[],
//   error: any
// }

const init = {
    lat: 60.3846,
    lng: 23.1286377,
    zoom: 16
}

const ParkMap = ({ isLoading, data, error }) => (

    <Map  center={[init.lat, init.lng]} zoom={init.zoom} >
        {
            error ? error : (
                <>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    {
                        data.map(({ spots, lat, lng }) => (
                            <Marker position={[lng, lat]}>
                                <Popup> Vapaita paikkoja: {spots}</Popup>
                            </Marker>
                        ))
                    }
                </>
            )
        }

    </Map>
);

export default ParkMap;
