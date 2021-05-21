import React from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import './modalContents.scss'

export default function ModalContents(img) {
  return(
    <>
      <Modal.Header closeButton>
        <Modal.Title>{img.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <img src={img.img} id="modalImage"/>
            </Col>
            <Col xs={12} md={6}>
              <h3>{img.title}</h3>
              <p><b>Medium:</b> {img.medium}</p>
              {/* <p><b>Cost:</b> ${img.cost}</p> */}
              <p><b>Artist Notes:</b> {img.description}</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      {/* <Modal.Footer>
        {img.buy}
      </Modal.Footer> */}
    </>
  )
}