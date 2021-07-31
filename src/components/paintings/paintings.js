import React, { useState } from 'react'
import './paintings.scss'
import { Modal } from 'react-bootstrap'

import ModalContents from '../modalContents/modalContents'

import  { paintingsList } from '../../images/paintings/paintingsList'

export default function Paintings() {
  const [show, setShow] = useState(false)
  const [pic, setPic] = useState({})

  const handleClose = () => setShow(false)
  const handleShow = (a) => {
    setShow(true)
    setPic(a)
  }

  return (
    <div id="paintings">
      <h2>Paintings</h2>
      <div id="paintingsContent">
        <span id="paintingsJumpOpen" />
        {paintingsList.length === 0 
          ? "No Paintings Available"
          : paintingsList.map(x => (
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