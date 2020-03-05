import React from 'react';
import { Table } from 'react-bootstrap'

// interface Props {
//   isLoading: boolean,
//   data: Sensor[],
//   error: any
// }

const SensorTable = ({ isLoading, data, error }) => (
  <Table>

    {
      error ? error : (
        
      isLoading ? isLoading: (
        <>
          <thead>
            <th>Nimi</th>
            <th>TVOC (ppm)</th>
            <th>Co2 (ppm)</th>
            <th>Lämpötila (°C)</th>
            <th>Ilmanpaine (kPa)</th>
            <th>Ilmankosteus (%)</th>
            <th>Pituuspiiri</th>
            <th>Leveyspiiri</th>
          </thead>
          <tbody>
            {
              data.map(({ sensor, ga, gb, gx, gy, gz, lat, lng }) => (
                <tr key={sensor}>
                  <td >{sensor}</td>
                  <td>{ga}</td>
                  <td>{gb}</td>
                  <td>{gx}</td>
                  <td>{gy}</td>
                  <td>{gz}</td>
                  <td>{lat}</td>
                  <td>{lng}</td>
                </tr>
              ))
            }
          </tbody>
        </>

      ))
    }
  </Table>
);

export default SensorTable;