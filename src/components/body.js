import React from 'react';
import '../App.css';
import portrait from '../portrait.jpg';

function Body() {
    return(
        <div>
          <h2>Should I bloat this simple web page</h2>
          <img id="portrait" src={portrait}></img>
          <table id="basic-info">
            <tr>
              <td>Telephone: </td>
              <td>88005353535</td>
            </tr>
            <tr>
              <td>E-mail: </td>
              <td>user.name@email.com</td>
            </tr>
            <tr>
              <td>Adress:</td>
              <td>Lenina 69, 42000</td>
            </tr>
          </table>
        </div>
    );
}

export default Body;
