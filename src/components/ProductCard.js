import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ProductCard(props) {
  return <div className="col-xl-3 col-md-4 mb-4">
  <Card style={{ width: '13rem' }}>
    <Card.Img variant="top" src={props.data.productURL} />
    <Card.Body>
      <Card.Title>{props.data.name}</Card.Title>
      <Card.Text>
        <Row>
        <Col>Rs.{props.data.productPrice}</Col>
        <Col><s>Rs.{props.data.productActualPrice}</s></Col>
        </Row>
      </Card.Text>
      <Button variant="primary"> <i className="fas fa-fw fa-pen"></i></Button>
      <Button variant="primary">Delete</Button>
    </Card.Body>
  </Card>
  </div>

}

export default ProductCard