import React from 'react'
import {Col, Row} from 'reactstrap'

export default function Footer() {
  return (
    <footer className={'container'}>
      <Row>
        <Col sm={6}>
          <h2>TO DO LIST</h2>
          <p>Lorem ipsum dolor sit ametlyeolo consectetur adipisicing elit sed dong eiusmod tempor incididunt ut labore
            et incididunt. <br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </Col>
        <Col sm={6}>
          <h2>About me</h2>
          Email:
          <a href="facebook.com">thanhnv5@rikkeisoft.com</a>
          <br/>
          Facebook:
          <a href="facebook.com">facebook.com</a>
        </Col>
      </Row>
      <Row>
        <Col md={12} className={'text-center'}>
          @copyRight
        </Col>
      </Row>
    </footer>
  )
}