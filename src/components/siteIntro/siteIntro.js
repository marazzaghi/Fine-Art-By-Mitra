import React, { useState } from 'react'
import './siteIntro.scss'

import mitra from '../../images/mitra.jpeg'

export default function SiteIntro() {
  return (
    <div id="siteIntro">
      <div class="row" id="firstBlock">
        <div class="col-md-6">
          <div id="name">
            <h1>Mitra A. Razzaghi, MD</h1>
          </div>
        </div>
        <div class="col-md-6" id="mitra">
          <img src={mitra} />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12" id="tagline">
          <h2>
            Mitra is a practicing physician, associate professor of medicine and an artist living in Aurora, Colorado. She is classically trained in realism art and is a member of Oil Painters of America (OPA).
          </h2>
        </div>
      </div>
    </div>
  )
}