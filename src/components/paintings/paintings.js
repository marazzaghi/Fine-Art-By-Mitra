import React, { useState } from 'react'
import './paintings.scss'
import { Modal, Collapse } from 'react-bootstrap'

import ModalContents from '../modalContents/modalContents'

import  { paintingsList } from '../../images/paintings/paintingsList'

export default function Paintings() {
  const [show, setShow] = useState(false)
  const [pic, setPic] = useState({})
  const [open, setOpen] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = (a) => {
    setShow(true)
    setPic(a)
  }

  return (
    <div id="paintings">
      <h2 onClick={() => setOpen(!open)}>Paintings</h2>
      <Collapse in={open}>
        <div id="paintingsContent">  
          {paintingsList.length === 0 
            ? "No Paintings Available"
            : paintingsList.map(x => (
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