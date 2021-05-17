import React from 'react'
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox-pro"
import './sketches.scss'

import { sketchesList, sketchesCpations } from './sketchesList'

export default function Sketches() {
  return (
    <div id="sketches">
      <h2>Sketches</h2>
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
    </div>
  )
}