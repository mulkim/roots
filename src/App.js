import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Error from "./components/error";
import Navigation from "./components/navigation";
import RootsToolbar from "./components/toolbar";

import './App.css';
import './styles/global.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className="fillParent">
            <RootsToolbar/>
            <Navigation />
            <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
