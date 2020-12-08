import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import '../App.css';
import Repos from './repos.js';
import Body from './body.js';
import Home from './homepage.js';
import App from '../App.js';

function Sidebar() {
    
    function closeNav(e) {
        e.preventDefault();
        document.getElementById("sidenav").style.width = "0";
        //document.getElementById("sidenav-button-open").style.display = "block";
    }
    
    function openNav(e) {
        e.preventDefault();
        document.getElementById("sidenav").style.width = "320px";
        //document.getElementById("sidenav-button-open").style.display = "none";
    }
    return (
        <div>
          <a id="sidenav-button-open" onClick={openNav}>☰</a>
          <BrowserRouter>
            <div id="sidenav">
              <a href="#" id="sidenav-button-close" onClick={closeNav}>×</a>            
              <Link to="/resume">Home</Link>
              <Link to="/resume/projects/">GitHub projects</Link>
              <Body/>
            </div>
            <Switch>
              <Route path="/resume/projects" component={Repos} />
	      <Route path="/resume" component={Home}/>
            </Switch>
          </BrowserRouter>
        </div>
    );
}

export default Sidebar;
