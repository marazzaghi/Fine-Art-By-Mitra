import React from 'react'
import './nav.scss'

export default function Nav() {
  return (
    <div className="nav">
      <a href="#bio">Biography</a>
      <a href="#sketches">Sketches</a>
      <a href="#paintings">Paintings</a>
      {/* <a href="#contact">Contact</a> */}
    </div>
  )
}