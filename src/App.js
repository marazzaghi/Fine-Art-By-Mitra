import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap'

import Header from './components/header/header'
import SiteIntro from './components/siteIntro/siteIntro'
import Home from './components/home/home'
import Biography from './components/biography/biography'
import Sketches from './components/sketches/sketches'
import Paintings from './components/paintings/paintings'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="sticky">
          <Header />
          <Navbar expand="lg" collapseOnSelect>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse collapseOnSelect id="responsive-navbar-nav">
              <Nav className="navBar" as="div">
                {/* <Nav.Link eventKey="home"><Link to="/">Home</Link></Nav.Link>
                <Nav.Link eventKey="ata"><Link to="/bio">About the Artist</Link></Nav.Link>
                <Nav.Link eventKey="sketches"><Link to="/sketches">Sketches</Link></Nav.Link>
                <Nav.Link eventKey="paintings"><Link to="/paintings">Paintings</Link></Nav.Link>
                <Nav.Link eventKey="contact"><Link to="/contact">Contact</Link></Nav.Link> */}
                <Nav.Link activeClass="active" eventKey="ata" href="#bio">About the Artist</Nav.Link>
                <Nav.Link activeClass="active" eventKey="sketches" href="#sketches">Sketches</Nav.Link>
                <Nav.Link activeClass="active" eventKey="paintings" href="#paintings">Paintings</Nav.Link>
                <Nav.Link activeClass="active" eventKey="contact" href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div id="content">
          <SiteIntro />
          <Home />
          <Biography />
          <Sketches />
          <Paintings />
          <Contact />
          {/* <Switch>
            <Route path="/bio">
              <Biography />
            </Route>
            <Route path="/sketches">
              <Sketches />
            </Route>
            <Route path="/paintings">
              <Paintings />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch> */}
        </div>
      </Router>
      <Footer />
    </div>
  )
}

export default App
