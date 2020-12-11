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
            image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
            experience: "6 months",
	    info: "Various online courses. This website is also made with this stack"
        },
        {
            id: 3,
            name: "MSSQL, MySQL, MongoDB",
            image: "https://iconsplace.com/wp-content/uploads/_icons/0d45ff/256/png/database-icon-11-256.png",
            experience: "2 years",
	    info: "Database management for web and desktop applications"
        },
        {
            id: 4,
            name: "Photoshop",
            experience: "2 years",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1024px-Adobe_Photoshop_CC_icon.svg.png",
	    info: "Icon design for websites. Menus and navbars for blogs, social media pages etc."
        },
        {
            id: 5,
            name: "Linux management",
            experience: "2 years",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/800px-Tux.svg.png",
	    info: "Server management and hosting (Linux server with Apache), desktop maintenance (Ubuntu/Arch). Basic shell scripting, understanding of unix filesystem"
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
