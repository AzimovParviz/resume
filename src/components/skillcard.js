import React from 'react';
import '../App.css';

function SkillCard (props) {
    return (
        <div className="skill-card">
          <ul className="skill-info" >
            <li className="skill-picture"><img className="skill-picture" src={props.image}/></li>
            <li className="card-item"><b>Skill: {props.name}</b></li>
            <li className="card-item"><b>Experience: {props.experience}</b></li>
            <li className="card-item popup-text">{props.info}</li>
          </ul>
        </div>
    );
}

export default SkillCard;
