import React, { useState } from 'react'
import { Container, Row, Col, Modal, Collapse } from 'react-bootstrap'
import './sketches.scss'

import ModalContents from '../modalContents/modalContents'

import { sketchesList, sketchesCpations } from './sketchesList'

export default function Sketches() {
  const [show, setShow] = useState(false)
  const [pic, setPic] = useState({})
  const [open, setOpen] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = (a) => {
    setShow(true)
    setPic(a)
  }

  return (
    <div id="sketches">
      <h2 onClick={() => setOpen(!open)}>Sketches</h2>
      <Collapse in={open}>
        <div id="paintingsContent">  
          {sketchesList.length === 0 
            ? "No Paintings Available"
            : sketchesList.map(x => (
              <img src={x.src} alt={x.alt} onClick={() => handleShow({title: x.title, medium: x.medium, cost: x.cost, description: x.description, img: x.src, buy: x.buy})} />
            ))
          }
          <Modal show={show} onHide={handleClose} centered size="lg" dialogClassName="featuredArt">
            <ModalContents {...pic} />
          </Modal>
        </div>
      </Collapse>
    </div>
  )
}