import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default class CardBeneficios extends Component {
  render() {
    return (
      <div>
         <CardGroup>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/img/cal.jpg" />
      <Card.Body>
        <Card.Title>Estes es un beneficio</Card.Title>
        <Card.Text>
         Este beneficio trata de:
        </Card.Text>
        <Button variant="btn btn-success">Mas informacion</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/img/casa.jpg" />
      <Card.Body>
        <Card.Title>Estes es un beneficio</Card.Title>
        <Card.Text>
         Este beneficio trata de:
        </Card.Text>
        <Button variant="primary">Mas informacion</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/img/fert.jpg" />
      <Card.Body>
        <Card.Title>Estes es un beneficio</Card.Title>
        <Card.Text>
         Este beneficio trata de:
        </Card.Text>
        <Button variant="primary">Mas informacion</Button>
      </Card.Body>
    </Card>
    </CardGroup>
      </div>
    )
  }
}
