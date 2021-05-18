import React, { useState } from 'react'
import './paintings.scss'
import { Container, Row, Col, Modal } from 'react-bootstrap'

import  { paintingsList, paintingsCaptions } from './paintingsList'

export default function Paintings() {
  const [show, setShow] = useState(false)
  const [pic, setPic] = useState({})

  const handleClose = () => setShow(false);
  const handleShow = (a) => {
    setShow(true)
    setPic(a)
  }

  return (
    <div id="paintings">
      <h2>Paintings</h2>
      <div id="paintingsContent">  
        {paintingsList.length === 0 
          ? "No Paintings Available"
          : paintingsList.map(x => (
            <img src={x.src} alt={x.alt} onClick={() => handleShow({title: x.title, medium: x.medium, cost: x.cost, description: x.description, img: x.src, buy: x.buy})} />
          ))
        }
        <Modal show={show} onHide={handleClose} centered size="lg" dialogClassName="featuredArt">
          <Modal.Header closeButton>
            <Modal.Title>{pic.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col xs={12} md={6}>
                  <img src={pic.img} id="modalImage"/>
                </Col>
                <Col xs={6} md={6}>
                  <h3>{pic.title}</h3>
                  <p><b>Medium:</b> {pic.medium}</p>
                  <p><b>Cost:</b> ${pic.cost}</p>
                  <p><b>Artist Notes:</b> {pic.description}</p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
           {pic.buy}
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}