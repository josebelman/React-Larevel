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
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="success" size="lg">Go somewhere</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src="images/CalentadorSolar.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="success" size="lg">Go somewhere</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src="images/fertilizante.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="success" size="lg">Go somewhere</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src="images/peces.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="success" size="lg">Go somewhere</Button>
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
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="success" size="lg">Go somewhere</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src="images/reforestacion.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="success" size="lg">Go somewhere</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src="images/techo.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="success" size="lg">Go somewhere</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src="images/Pavimentacion.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="success" size="lg">Go somewhere</Button>
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
    </Container>
    </div>

 
    


  




    

  )
}

export default Beneficios