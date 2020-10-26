import React from 'react';
import SkillCard from './skillcard.js';
import '../App.css';

function Home() {
    const skills = [
        {
            id: 0,
            name: "C#/.NET Core 3.0/ASP.NET",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/C_Sharp_logo.svg",
            experience: "3+ years"
        },
        {
            id: 1,
            name: "Python",
            image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
            experience: "1,5 years"
        },
        {
            id: 2,
            name: "React.js/Node.js/MongoDB",
            image: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fmiro.medium.com%2Fmax%2F2600%2F1%2AFVtCyRdJ6KOr4YswTtwMeA.jpeg&sp=1603728567T24cef6f9fe743a70e1e256eb46d41630b2b94b38ead268cb039fd0559a49fab9",
            experience: "6 months",
        },
        {
            id: 3,
            name: "MSSQL, MySQL, MongoDB",
            experience: "2 years",
        },
        {
            id: 4,
            name: "Photoshop",
            experience: "2 years"
        }
    ];
    
    return(
        <div className="homepage">
          <h1>About me</h1>
          <div className="homepage-flexbox">
            {skills.map(skill=> <SkillCard name={skill.name} experience={skill.experience} image={skill.image}/>)}
          </div>
        </div>
    );
}

export default Home;
