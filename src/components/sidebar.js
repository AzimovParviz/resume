import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import '../App.css';
import Repos from './repos.js';

function Sidebar() {
  return (
    <div className="App">
    	    {/* <a href="../index.js">Home</a> */}
    	    {/* <a href="./repos.js">GitHub projects</a> */}
    	  {/* <a href="#contact">Contact</a> */}
      <BrowserRouter>
        <div className="sidenav">
          <div>
            <Link to="/projects/">GitHub project</Link>
          </div>
        </div>
        <Switch>
          <Route path="/projects" component={Repos} />      
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Sidebar;
