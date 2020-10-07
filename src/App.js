import React from 'react';
import './App.css';
import Sidebar from './components/sidebar.js';
import Header from './components/header.js';

function App() {
  return (
      <div className="App">
        <Sidebar/>
	<Header />
      </div>
  );
}

export default App;
