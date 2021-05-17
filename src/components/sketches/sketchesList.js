import { Button } from 'react-bootstrap'

import boat from '../../images/paintings/boat.jpeg'
import candle from '../../images/paintings/candle.jpeg'
import cloth from '../../images/paintings/cloth.jpeg'

export const sketchesList = [
  {
    src: boat,
    width: 300,
    height: 'auto',
    caption: 
      (
        <Button variant="light">
          <a
            href="http://simple-react-lightbox.dev"
            target="__blank"
            className="SRLCustomCaption myCustomButton"
          >
            Buy Now! - $100
          </a>
        </Button>
      )
  },
  {
    src: candle,
    width: 1067,
    height: 'auto',
    caption: 
      (
        <Button variant="light">
          <a
            href="http://simple-react-lightbox.dev"
            target="__blank"
            className="SRLCustomCaption myCustomButton"
          >
            Buy Now! - $100
          </a>
        </Button>
      )
  },
  {
    src: cloth,    
    width: 1067,
    height: 'auto',
    caption: 
      (
        <Button variant="light">
          <a
            href="http://simple-react-lightbox.dev"
            target="__blank"
            className="SRLCustomCaption myCustomButton"
          >
            Buy Now! - $100
          </a>
        </Button>
      )
  }
]

export const sketchesCpations = sketchesList.map((sketch, index) => ({id: index, caption: sketch.caption}))