import React from 'react';
import '../App.css';
import bg from "../bg.png";

function Header() {
    return(
        <div className="App-header">
	  <div id="header-bg"><img src={bg}/></div>
        </div>
    );
}

export default Header;
