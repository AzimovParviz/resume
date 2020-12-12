import React from 'react';
import '../App.css';
import portrait from '../portrait.jpg';

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
        </div>
    );
}

export default Body;
