import { Button } from 'react-bootstrap'

import hand from '../../images/sketches/1.PNG'
import twig from '../../images/sketches/20.PNG'
import cloth from '../../images/sketches/23.PNG'
import statue from '../../images/sketches/26.PNG'
import eye from '../../images/sketches/28.PNG'
import lady from '../../images/sketches/30.PNG'

export const sketchesList = [
  {
    src: lady,
    title: 'Lady',
    medium: 'Sketch',
    description: 'Loreum ipsum dolor',
    cost: '100',
    buy: 
      (
        <Button>
          <a
            href="http://simple-react-lightbox.dev"
            target="__blank"
            className="SRLCustomCaption myCustomButton"
          >
            Buy Now! - $100
          </a>
        </Button>
      ),
  },
  {
    src: eye,
    title: 'Eye',
    medium: 'Sketch',
    description: 'Loreum ipsum dolor',
    cost: '100',
    buy: 
      (
        <Button>
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
    src: statue,    
    title: 'Statue',
    medium: 'Sketch',
    description: 'Loreum ipsum dolor',
    cost: '100',
    buy: 
      (
        <Button>
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
    title: 'Cloth',
    medium: 'Sketch',
    description: 'Loreum ipsum dolor',
    cost: '100',
    buy: 
      (
        <Button>
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
    src: twig,    
    title: 'Twig',
    medium: 'Sketch',
    description: 'Loreum ipsum dolor',
    cost: '100',
    buy: 
      (
        <Button>
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
    src: hand,    
    title: 'Hand',
    medium: 'Sketch',
    description: 'Loreum ipsum dolor',
    cost: '100',
    buy: 
      (
        <Button>
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