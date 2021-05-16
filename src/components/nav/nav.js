import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.scss'

export default function CustomNav() {
  return (
    <>
      <div className="sticky">
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navBar" as="div">
            <Nav.Link href="#bio">Biography</Nav.Link>
            <Nav.Link href="#sketches">Sketches</Nav.Link>
            <Nav.Link href="#paintings">Paintings</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </>
  )
}