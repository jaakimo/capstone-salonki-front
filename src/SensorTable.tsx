import React, { Component } from 'react';
import { Table } from 'react-bootstrap'

interface Props {
  isLoading: boolean,
  data: Sensor[],
  error: any
}

const SensorTable = ({ isLoading, data, error }: Props) => (
  <Table>

    {
      error ? error : (
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
              data.map(({ sensor, gx, gy, gz, ga, gb, lat, lng }) => (
                <tr key={sensor}>
                  <td>{sensor}</td>
                  <td>{gx}</td>
                  <td>{gy}</td>
                  <td>{gz}</td>
                  <td>{ga}</td>
                  <td>{gb}</td>
                  <td>{lat}</td>
                  <td>{lng}</td>
                </tr>
              ))
            }
          </tbody>
        </>

      )
    }
  </Table>
);

export default SensorTable;