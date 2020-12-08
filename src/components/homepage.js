import React from 'react';
import SkillCard from './skillcard.js';
import '../App.css';

function Home() {
    const skills = [
        {
            id: 0,
            name: "C#/.NET Core 3.0/ASP.NET",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/C_Sharp_logo.svg",
            experience: "3+ years",
            info: ".NET Core 3.0 web applications with Entity Framework, Desktop Applications with C# and WPF with SQL databases",
        },
        {
            id: 1,
            name: "Python",
            image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
            experience: "1,5 years",
	    info: "Workplace automation, web scraping, CLI applications"
        },
        {
            id: 2,
            name: "React.js/Node.js/MongoDB stack",
            image: "",
            experience: "6 months",
	    info: "Various online courses. This website is also made with this stack"
        },
        {
            id: 3,
            name: "MSSQL, MySQL, MongoDB",
            experience: "2 years",
	    info: "Database management for web and desktop applications"
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
            {skills.map(skill=> <SkillCard name={skill.name} experience={skill.experience} image={skill.image} info={skill.info}/>)}
          </div>
        </div>
    );
}

export default Home;
