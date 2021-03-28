import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Weather() {
    const call = "https://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid=0e86c819815dc35bc90fc81863a37471";
    const [weather, setWeather] = useState({});
    const hook = () => {        
        axios
            .get(call)
            .then(response => {
                console.log('promise fulfilled');
                setWeather(response.data.main);
                console.log(response.data.main);                
            });
    };
    useEffect(hook, []);
    
    return (
        <div className="weather-card">
          <ul className="weather-info">
            <li className="weather-item">Temperature in Helsinki is: {(weather.temp-273.15).toFixed(1)} Celcius</li>
	    <li className="weather-item">Feels like: {(weather.feels_like-273.15).toFixed(1)} Celcius</li>
            <li className="weather-item">Minimal temperature: {(weather.temp_min-273.15).toFixed(1)} Celcius</li>
            <li className="weather-item">Maximum temperature: {(weather.temp_max-273.15).toFixed(1)} Celcius</li>
          </ul>
        </div>
    );
}

export default Weather;
