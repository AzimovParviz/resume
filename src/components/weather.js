import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Weather() {
    const call = "https://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid=0e86c819815dc35bc90fc81863a37471";
    const [weather, setWeather] = useState({});
    const weather_data = "";       
    const hook = () => {
        console.log('effect');
        axios
            .get(call)
            .then(response => {
                console.log('promise fulfilled');
                setWeather(response.data.main);
                console.log(response.data.main);                
            });
    };
    useEffect(hook, {});
    
    return (
        <div className="weather">
          <p>Temperature in Helsinki is: {(weather.temp-273.15).toFixed(1)} Celcius</p>
        </div>
    );
}

export default Weather;
