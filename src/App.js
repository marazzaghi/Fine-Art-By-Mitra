import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap'

import Header from './components/header/header'
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
        <Header />
        <div className="sticky">
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navBar" as="div">
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/bio">About the Artist</Link></Nav.Link>
                <Nav.Link><Link to="/sketches">Sketches</Link></Nav.Link>
                <Nav.Link><Link to="/paintings">Paintings</Link></Nav.Link>
                <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div id="content">
          <Switch>
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
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  )
}

export default App
