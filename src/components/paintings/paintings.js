import React, { useState } from 'react'
import './paintings.scss'
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox-pro"
import { Collapse } from 'react-bootstrap'

import  { paintingsList, paintingsCaptions } from './paintingsList'

export default function Paintings() {
  const [open, setOpen] = useState(false)
  return (
    <div id="paintings">
      <h2 onClick={() => setOpen(!open)}>Paintings</h2>
      <Collapse in={open}>
        <div id="paintingsContent">
          <SimpleReactLightbox>
            <SRLWrapper customCaptions={paintingsCaptions}>
              {paintingsList.length === 0 
                ? "No Paintings Available"
                : paintingsList.map(x => (
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