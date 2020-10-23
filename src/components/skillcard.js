import React, {useState, useEffect} from 'react';
import '../App.css';

function SkillCard (props) {
    return (
        <div className="skill-card">
          <ul className="skill-info" >
            <li className="skill-picture"><img className="skill-picture" src={props.image}/></li>
            <li className="card-item"><b>{props.name}</b></li>
            <li className="card-item">{props.exp}</li>
          </ul>
        </div>
    );
}

export default SkillCard;
