import { Button } from 'react-bootstrap'

import boat from '../../images/paintings/boat.jpeg'
import candle from '../../images/paintings/candle.jpeg'
import cloth from '../../images/paintings/cloth.jpeg'
import fruit from '../../images/paintings/fruit.jpeg'
import mountain_lake from '../../images/paintings/mountain_lake.jpeg'
import orange_lily from '../../images/paintings/orange_lily.jpeg'
import pink_rose from '../../images/paintings/pink_rose.jpeg'
import pitcher from '../../images/paintings/pitcher.jpeg'
import pomegranate from '../../images/paintings/pomegranate.jpeg'
import red_skirt from '../../images/paintings/red_skirt.jpeg'
import toy_fox from '../../images/paintings/toy_fox.jpeg'
import water_lily from '../../images/paintings/water_lily.jpeg'
import white_orchid from '../../images/paintings/white_orchid.jpeg'
import window from '../../images/paintings/window.jpeg'

export const paintingsList = [
  {
    src: boat,
    width: '300px',
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
  },
  {
    src: fruit,
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
    src: mountain_lake,
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
    src: orange_lily,
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
    src: pink_rose,
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
    src: pitcher,
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
    src: pomegranate,
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
    src: red_skirt,
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
    src: toy_fox,
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
    src: water_lily,
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
    src: white_orchid,
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
    src: window,
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
]

export const paintingsCaptions = paintingsList.map((painting, index) => ({id: index, caption: painting.caption}))