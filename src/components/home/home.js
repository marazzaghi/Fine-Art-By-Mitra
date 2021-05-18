import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'
import './home.scss'
import leaf from '../../images/sketches/20.PNG'
import toyFox from '../../images/paintings/toy_fox.jpeg'
import window from '../../images/paintings/window.jpeg'

export default function Home() {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState('234')
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = (a) => {
    setShow(true)
    setContent(a.text)
    setImage(a.img)
    setTitle(a.title)
  }

  return (
    <div id="home">
      <h2>Featured Art</h2>
      <div id="homeContent">
        <img src={toyFox} onClick={() => handleShow({title: 'Toy Fox', text: 'aaa', img: toyFox})} />
        <img src={leaf} onClick={() => handleShow({title: 'Leaf', text: 'yybbby', img: leaf})} />
        <img src={window} onClick={() => handleShow({title: 'Window', text: 'vvv', img: window})} />
      </div>

      <Modal show={show} onHide={handleClose} centered size="lg" dialogClassName="featuredArt">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <img src={image} id="modalImage"/>
              </Col>
              <Col xs={6} md={6}>
                <h3>Toy Fox</h3>
                <p><b>Medium:</b> Oils</p>
                <p><b>Cost:</b> $100</p>
                <p><b>Artist Notes:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet massa auctor, porta tortor sit amet, commodo justo. In semper urna nec justo placerat, at dignissim risus placerat. Vestibulum vitae tortor sapien. Mauris sodales, nunc in facilisis bibendum, urna tellus accumsan orci, vel pulvinar enim est in ligula. Maecenas ac maximus mi, non dapibus dui. Maecenas semper ligula at varius suscipit. Maecenas dignissim varius magna. Vestibulum et hendrerit elit, sit amet sagittis ipsum. Vivamus purus nisl.</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Buy Now
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}