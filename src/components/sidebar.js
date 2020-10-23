import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import '../App.css';
import Repos from './repos.js';
import Body from './body.js';
import Home from './homepage.js';
import App from '../App.js';

function Sidebar() {
  return (
    <div className="App">
    	    {/* <a href="../index.js">Home</a> */}
    	    {/* <a href="./repos.js">GitHub projects</a> */}
    	  {/* <a href="#contact">Contact</a> */}
      <BrowserRouter>
        <div className="sidenav">
          <div>
            <Link to="/">Home</Link>
            <Link to="/projects/">GitHub projects</Link>
            <Body/>
          </div>
        </div>
        <Switch>
          <Route path="/projects" component={Repos} />
	  <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Sidebar;
