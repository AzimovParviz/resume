import React from 'react';
import './App.css';
import Sidebar from './components/sidebar.js';
import Weather from './components/weather.js';

function App() {
        return (
            <div className="App">
              <Sidebar/>
              <Weather/>
            </div>
        );
}

export default App;
