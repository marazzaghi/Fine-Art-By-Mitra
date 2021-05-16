import './App.scss';
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Biography from './components/biography/biography'
import Sketches from './components/sketches/sketches'
import Paintings from './components/paintings/paintings'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Biography />
      <Sketches />
      <Paintings />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
