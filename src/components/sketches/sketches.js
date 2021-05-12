import { GridList, GridListTile, Dialog } from '@material-ui/core'
import './sketches.scss'
import mitra from '../../images/mitra.jpeg'

export default function Sketches() {

  const tileData = [
    {
      img: mitra,
      title: 'Image',
      author: 'author',
      cols: 2,
    }
  ]
  return (
    <div id="sketches">
      <h2>Sketches</h2>
      <GridList cellHeight={160} className="gridList" cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}