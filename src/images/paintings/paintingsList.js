import boat from './boat.jpeg'
import candle from './candle.jpeg'
import cloth from './cloth.jpeg'
import fruit from './fruit.jpeg'
import mountain_lake from './mountain_lake.jpeg'
import orange_lily from './orange_lily.jpeg'
import pink_rose from './pink_rose.jpeg'
import pitcher from './pitcher.jpeg'
import pomegranate from './pomegranate.jpeg'
import red_skirt from './red_skirt.jpeg'
import toy_fox from './toy_fox.jpeg'
import water_lily from './water_lily.jpeg'
import white_orchid from './white_orchid.jpeg'
import window from './window.jpeg'
import lilly from './Lilly.jpg'

export const paintingsList = [
  {
    src: boat,
    title: 'Boat',
    medium: 'Oil',
    description: 'Loreum ipsum dolor',
    cost: '100',
  },
  {
    src: lilly,
    title: 'Lilly',
    medium: 'Oil',
    description: 'Loreum ipsum dolor',
    cost: '100',
  },
  {
    src: candle,
    title: 'Candle',
    medium: 'Oil',
    description: 'Loreum ipsum dolor',
    cost: '100',
  },
  {
    src: cloth,    
    title: 'Cloth',
    medium: 'Oil',
    description: 'Loreum ipsum dolor',
    cost: '100',
  },
  {
    src: fruit,
    title: 'Fruit',
    medium: 'Oil',
    description: 'Loreum ipsum dolor',
    cost: '100',
  },
  {
    src: mountain_lake,
    title: 'Mountain Lake',
    medium: 'Oil',
    description: 'Loreum ipsum dolor',
    cost: '100',
  },
  {
    src: orange_lily,
    title: 'Orange Lilly',
    medium: 'Oil',
    description: 'Loreum ipsum dolor',
    cost: '100',
  },
  {
    src: pink_rose,
    title: 'Pink Rose',
    medium: 'Oil',
    description: 'Loreum ipsum dolor',
    cost: '100',
  },
  {
    src: pitcher,
    title: 'Pitcher',
    medium: 'Oil',
    description: 'Loreum ipsum dolor',
    cost: '100',
  },
  {
    src: pomegranate,
    title: 'Pomegranate',
    medium: 'Oil',
    description: 'Loreum ipsum dolor',
    cost: '100',
  },
  {
    src: red_skirt,
    title: 'Red Skirt',
    medium: 'Oil',
    description: 'Loreum ipsum dolor',
    cost: '100',
  },
  {
    src: toy_fox,
    title: 'Toy Fox',
    medium: 'Oil',
    description: 'Loreum ipsum dolor',
    cost: '100',
  },
  {
    src: water_lily,
    title: 'Water Lilly',
    medium: 'Oil',
    description: 'Loreum ipsum dolor',
    cost: '100',
  },
  {
    src: white_orchid,
    title: 'White Orchid',
    medium: 'Oil',
    description: 'Loreum ipsum dolor',
    cost: '100',
  },
  {
    src: window,
    title: 'Window',
    medium: 'Oil',
    description: 'Loreum ipsum dolor',
    cost: '100',
  },
]

export const paintingsCaptions = paintingsList.map((painting, index) => ({id: index, buy: painting.caption}))