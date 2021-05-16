import React, { useState } from 'react'
import { GridList, GridListTile } from '@material-ui/core'
import { CustomDialog } from '../dialog/dialog'
import './sketches.scss'
import mitra from '../../images/mitra.jpeg'

export default function Sketches() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [image, setImage] = useState(null)
  const [altText, setAltText] = useState('')
  const [ppLink, setPpLink] = useState(null)

  const tileData = [
    {
      img: mitra,
      title: 'Image',
      author: 'author',
      cols: 2,
      payPal: 'https://google.com'
    }
  ]

  const showDialog = (image) => {
    setImage(image.img)
    setPpLink(image.payPal)
    setDialogOpen(true)
    setAltText(image.title)
  }

  const handleClose = () => {
    setDialogOpen(false)
    setImage(null)
    setPpLink(null)
    setAltText('')
  }

  return (
    <div id="sketches">
      <h2>Sketches</h2>
      <GridList cellHeight={160} className="gridList" cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} onClick={(tile) => <CustomDialog {...tile}/>}/>
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}