import React, { useState } from 'react'
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox-pro"
import { Collapse } from 'react-bootstrap'
import './sketches.scss'

import { sketchesList, sketchesCpations } from './sketchesList'

export default function Sketches() {
  const [open, setOpen] = useState(false)
  return (
    <div id="sketches">
      <h2 onClick={() => setOpen(!open)}>Sketches</h2>
      <Collapse in={open}>
        <div id="sketchesContent">
          <SimpleReactLightbox>
            <SRLWrapper customCaptions={sketchesCpations}>
              {sketchesList.length === 0 
                ? "No Sketches Available"
                : sketchesList.map(x => (
                  <a href={x.src} data-attribute="SRL">
                    <img src={x.src} alt={x.alt}/>
                  </a>
                ))
              }
            </SRLWrapper>
          </SimpleReactLightbox>
        </div>
      </Collapse>
    </div>
  )
}