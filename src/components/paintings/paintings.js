import React, { useState } from 'react'
import './paintings.scss'
import { Modal, Collapse } from 'react-bootstrap'

import ModalContents from '../modalContents/modalContents'

import  { paintingsList } from '../../images/paintings/paintingsList'

import down from '../../images/siteImages/chevron-down.svg'
import up from '../../images/siteImages/chevron-up.svg'

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
      <span id="paintingsJumpClosed" />
      <h2 onClick={() => setOpen(!open)}>Paintings</h2>
      <div id="featuredPaintings">
        {paintingsList.length === 0 
          ? "No Paintings Available"
          : paintingsList.map(x => (
            x?.featured && (<img src={x.src} alt={x.alt} onClick={() => handleShow({title: x.title, medium: x.medium, cost: x.cost, description: x.description, img: x.src, buy: x.buy, size: x.size})} />)
          ))
        }
      </div>
      <Collapse in={open}>
        <div id="paintingsContent">
          <span id="paintingsJumpOpen" />
          {paintingsList.length === 0 
            ? "No Paintings Available"
            : paintingsList.map(x => ( !x?.featured && (
              <img src={x.src} alt={x.alt} onClick={() => handleShow({title: x.title, medium: x.medium, cost: x.cost, description: x.description, img: x.src, buy: x.buy, size: x.size})} />)
            ))
          }
          <Modal show={show} onHide={handleClose} centered size="lg" dialogClassName="featuredArt">
            <ModalContents {...pic} />
          </Modal>
        </div>
      </Collapse>
      <img src={open ? up: down} onClick={() => setOpen(!open)} id="paintingsArrow"/>
      <a href={open ? "#paintingsJumpOpen" : "#paintingsJumpClosed"} id="mobileLink">
        <img src={open ? up: down} onClick={() => setOpen(!open)} />
      </a>
    </div>
  )
}