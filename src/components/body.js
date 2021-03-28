import React from 'react';
import '../App.css';
import portrait from '../portrait.jpg';
import Weather from './weather.js';

function Body() {
    return(
        <div>
          <img id="portrait" src={portrait}></img>
          <table id="basic-info">
            <tr>
              <td>E-mail: </td>
              <td>parviz.azimov@student.lab.fi</td>
            </tr>
          </table>
          <Weather/>
        </div>
    );
}

export default Body;
