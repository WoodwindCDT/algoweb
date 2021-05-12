import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ParallaxProvider  } from 'react-scroll-parallax';

import About from './components/About'
import Home from './pages/Home'

function App() {
  return (
    <ParallaxProvider>
      <Router basename="/algoweb">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </Switch>
      </Router>
    </ParallaxProvider>
  );
}

export default App;