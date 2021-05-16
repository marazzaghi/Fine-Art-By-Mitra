import React from 'react'
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import './sketches.scss'

import { sketchesList } from './sketchesList'

export default function Sketches() {
  if (sketchesList.length === 0) {
    console.warn('henlo')
  }

  return (
    <div id="sketches">
      <h2>Sketches</h2>
      <div id="sketchesContent">
        <SimpleReactLightbox>
          <SRLWrapper>
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
    </div>
  )
}