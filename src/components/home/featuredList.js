import { Button } from 'react-bootstrap'

import boat from '../../images/paintings/boat.jpeg'
import candle from '../../images/paintings/candle.jpeg'
import cloth from '../../images/paintings/cloth.jpeg'

export const featuredList = [
  {
    src: boat,
    title: 'Boat',
    medium: 'Oil',
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
    src: candle,
    title: 'Boat',
    medium: 'Oil',
    description: 'Loreum ipsum dolor',
    cost: '100',
    buy: 
      (
        <Button >
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
    medium: 'Oil',
    description: 'Loreum ipsum dolor',
    cost: '100',
    buy: 
      (
        <Button >
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
]
