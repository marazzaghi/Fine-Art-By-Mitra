import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import './sketches.scss'

import ModalContents from '../modalContents/modalContents'

import { sketchesList } from '../../images/sketches/sketchesList'

export default function Sketches() {
  const [show, setShow] = useState(false)
  const [pic, setPic] = useState({})

  const handleClose = () => setShow(false)
  const handleShow = (a) => {
    setShow(true)
    setPic(a)
  }

  return (
    <div id="sketches">
      <h2>Sketches</h2>
      <div id="paintingsContent">  
        <span id="sketchJumpOpen" />
        {sketchesList.length === 0 
          ? "No Paintings Available"
          : sketchesList.map(x => ( 
            <img src={x.src} alt={x.alt} onClick={() => handleShow({title: x.title, medium: x.medium, cost: x.cost, description: x.description, img: x.src, buy: x.buy, size: x.size})} />
          ))
        }
        <Modal show={show} onHide={handleClose} centered size="lg" dialogClassName="featuredArt">
          <ModalContents {...pic} />
        </Modal>
      </div>
    </div>
  )
}