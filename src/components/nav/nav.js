import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.scss'

export default function CustomNav() {
  return (
    <>
      <div className="sticky">
        <Navbar expand="lg" collapseOnSelect>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse collapseOnSelect id="basic-navbar-nav">
            <Nav className="navBar" as="div">
              <Nav.Link eventKey="1" href="#bio">Biography</Nav.Link>
              <Nav.Link eventKey="1" href="#sketches">Sketches</Nav.Link>
              <Nav.Link eventKey="1" href="#paintings">Paintings</Nav.Link>
              <Nav.Link eventKey="1" href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  )
}