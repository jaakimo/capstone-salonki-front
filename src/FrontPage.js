import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GaugeChart from 'react-gauge-chart';
import "./App.css"

const FrontPage = ({ isLoading, data, error }) => (
  <>
    <Container>
      {
        isLoading ? isLoading : (
          <>
            <Row>
              <Col xs={12} lg={{ offset: 2, span: 8 }}>
                <img style={{'display':'block', 'margin-left':'auto', 'margin-right':'auto','width':'10%'}} width='50px'  src={'sensor.png'}></img>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={6}>
                <h5> TVOC </h5>
                <GaugeChart id="TVOC"
                  arcsLength={[0.5, 0.3, 0.2]}
                  colors={['#aaaaff', '#Ffff66', '#EA6644']}
                  percent={data[0].ga / 2000}
                  arcPadding={0.02}
                  textColor="gray"
                  formatTextValue={value => data[0].ga + ' ppm'}
                />
              </Col>

              <Col xs={12} lg={6}>
                <h5> Co2 </h5>
                <GaugeChart id="CO2"
                  arcsLength={[0.5, 0.3, 0.2]}
                  colors={['#aaaaff', '#Ffff66', '#EA6644']}
                  percent={data[0].gb / 3000}
                  arcPadding={0.02}
                  textColor="gray"
                  formatTextValue={value => data[0].gb + ' ppm'}
                />
              </Col>
            </Row>


            <Row>
              <Col xs={12} lg={6}>
                <h5> Ilmankosteus </h5>
                <GaugeChart id="HUM"
                  arcsLength={[0.5, 0.5]}
                  colors={['#f0e286', '#acd9e8']}
                  percent={data[0].gz / 100}
                  arcPadding={0.02}
                  textColor="gray"
                />
              </Col>

              <Col xs={12} lg={6}>
                <h5> Lämpötila </h5>
                <GaugeChart id="TEMP"
                  arcsLength={[0.3, 0.3,.3]}
                  nrOfLevels={30}
                  colors={['#4444ff','#66ff66', '#FF6666']}
                  arcWidth={0.3}
                  percent={(35)/50}//(data[0].gx + 10)/50}
                  textColor="gray"
                  formatTextValue={ value => data[0].gx + ' °C' }
                />
              </Col>
            </Row>
          </>
        )
      }
    </Container>
  </>
);

/**


function FrontPage(){
    return(
        <>
            <div>
                <h1>Tervetuloa smart salonkiin!</h1>
                <p>frontpage placeholder</p>
            </div>
        </>
    );
}
*/
export default FrontPage;