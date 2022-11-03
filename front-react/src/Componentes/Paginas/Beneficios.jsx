import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactPlayer from 'react-player';

const Beneficios = () => {
  return (
    <div>
      <Container>
      <div className="container text-center">
  <div className="row">
    <div className="col col-lg-1">
    <img src="images/gto.png" alt="Este es de prueba"/>
    </div>
    <div className="col col-lg-8">
    <h1>Beneficios Precidencia Municipal Acambaro</h1>
    </div>
    <div className="col col-lg-1">
    <img src="images/acambaro.png" alt="Este es de prueba"/>
    </div>
  </div>
</div><br />
      <Row>
        <Col>
                <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src="images/aves.jpg" />
              <Card.Body>
                <Card.Title text-align="center">10 Aves ponedoras</Card.Title>
                <Card.Text>
                 <p><b>Fecha-Inicio:</b> 00/00/0000</p>
                 <p><b>Fecha-Fin:</b> 00/00/0000</p>
                 <p><b>Informacion del beneficio:</b>***************</p>
                 <p><b>Requisitos:</b>---------------</p>
                </Card.Text>
                <Button variant="success" size="sm" >Mas Informacion</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src="images/CalentadorSolar.jpg" />
              <Card.Body>
                <Card.Title>Calentador Solar</Card.Title>
                <Card.Text>
                  <p><b>Fecha-Inicio:</b> 00/00/0000</p>
                  <p><b>Fecha-Fin:</b> 00/00/0000</p>
                  <p><b>Informacion del beneficio:</b>***************</p>
                  <p><b>Requisitos:</b>---------------</p>
                </Card.Text>
                <Button variant="success" size="sm">Mas Informacion</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src="images/fertilizante.jpg" />
              <Card.Body>
                <Card.Title>Fertilizantes</Card.Title>
                <Card.Text>
                    <p><b>Fecha-Inicio:</b> 00/00/0000</p>
                    <p><b>Fecha-Fin:</b> 00/00/0000</p>
                    <p><b>Informacion del beneficio:</b>***************</p>
                    <p><b>Requisitos:</b>---------------</p>
                </Card.Text>
                <Button variant="success" size="sm">Mas Informacion</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src="images/peces.jpg" />
              <Card.Body>
                <Card.Title>Peces</Card.Title>
                <Card.Text>
                  <p><b>Fecha-Inicio:</b> 00/00/0000</p>
                  <p><b>Fecha-Fin:</b> 00/00/0000</p>
                  <p><b>Informacion del beneficio:</b>***************</p>
                  <p><b>Requisitos:</b>---------------</p>
                </Card.Text>
                <Button variant="success" size="sm">Mas Informacion</Button>
              </Card.Body>
            </Card>
        </Col>
      </Row>
<br />
      <Row>
        <Col>
        <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src="images/redes.jpg" />
              <Card.Body>
                <Card.Title>Redes De Pesca</Card.Title>
                <Card.Text>
                    <p><b>Fecha-Inicio:</b> 00/00/0000</p>
                    <p><b>Fecha-Fin:</b> 00/00/0000</p>
                    <p><b>Informacion del beneficio:</b>***************</p>
                    <p><b>Requisitos:</b>---------------</p>
                </Card.Text>
                <Button variant="success" size="sm">Mas Informacion</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src="images/reforestacion.jpg" />
              <Card.Body>
                <Card.Title>Reforestacion</Card.Title>
                <Card.Text>
                    <p><b>Fecha-Inicio:</b> 00/00/0000</p>
                    <p><b>Fecha-Fin:</b> 00/00/0000</p>
                    <p><b>Informacion del beneficio:</b>***************</p>
                    <p><b>Requisitos:</b>---------------</p>
                </Card.Text>
                <Button variant="success" size="sm">Mas Informacion</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src="images/techo.jpg" />
              <Card.Body>
                <Card.Title>Techo Digno</Card.Title>
                <Card.Text>
                    <p><b>Fecha-Inicio:</b> 00/00/0000</p>
                    <p><b>Fecha-Fin:</b> 00/00/0000</p>
                    <p><b>Informacion del beneficio:</b>***************</p>
                    <p><b>Requisitos:</b>---------------</p>
                </Card.Text>
                <Button variant="success" size="sm">Mas Informacion</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src="images/Pavimentacion.jpg" />
              <Card.Body>
                <Card.Title>Pavimentacion</Card.Title>
                <Card.Text>
                    <p><b>Fecha-Inicio:</b> 00/00/0000</p>
                    <p><b>Fecha-Fin:</b> 00/00/0000</p>
                    <p><b>Informacion del beneficio:</b>***************</p>
                    <p><b>Requisitos:</b>---------------</p>
                </Card.Text>
                <Button variant="success" size="sm">Mas Informacion</Button>
              </Card.Body>
            </Card>
        </Col>
      </Row>
      <Row>
        <Col>
        <br />
        <div align="center">
        <ReactPlayer
        url=
        "https://fb.watch/gxK10LRUwh/"
        width="50%"
        height="50%"
        controls
        loop
        />
        </div>
        </Col>
      </Row>
      <br />
    </Container>
    </div>  

  )
}

export default Beneficios