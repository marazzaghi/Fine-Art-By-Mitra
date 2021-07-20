import React, { useState } from 'react'
import { Modal, Collapse } from 'react-bootstrap'
import './sketches.scss'

import ModalContents from '../modalContents/modalContents'

import { sketchesList } from '../../images/sketches/sketchesList'

import down from '../../images/siteImages/chevron-down.svg'
import up from '../../images/siteImages/chevron-up.svg'

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
      <span id="sketchJumpClosed" />
      <h2 onClick={() => setOpen(!open)}>Sketches</h2>
      <div id="featuredPaintings">
        {sketchesList.length === 0 
          ? "No Paintings Available"
          : sketchesList.map(x => (
            x?.featured && (<img src={x.src} alt={x.alt} onClick={() => handleShow({title: x.title, medium: x.medium, cost: x.cost, description: x.description, img: x.src, buy: x.buy, size: x.size})} />)
          ))
        }
      </div>
      <Collapse in={open}>
        <div id="paintingsContent">  
          <span id="sketchJumpOpen" />
          {sketchesList.length === 0 
            ? "No Paintings Available"
            : sketchesList.map(x => ( !x?.featured && (
              <img src={x.src} alt={x.alt} onClick={() => handleShow({title: x.title, medium: x.medium, cost: x.cost, description: x.description, img: x.src, buy: x.buy, size: x.size})} />)
            ))
          }
          <Modal show={show} onHide={handleClose} centered size="lg" dialogClassName="featuredArt">
            <ModalContents {...pic} />
          </Modal>
        </div>
      </Collapse>
      <img src={open ? up: down} onClick={() => setOpen(!open)} />
    </div>
  )
}