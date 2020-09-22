import React from 'react';
import '../App.css';

const links = [
    {
	'title': 'boorupaper',
	'url': 'https://github.com/AzimovParviz/boorupaper'
    },
    {
	'title': 'telegram-temperature-bot',
	'url': 'https://github.com/AzimovParviz/telegram-temperature-alert'
    },    
];

function Repos() {
  return (
      <div className="Repos" >
	  <h1>My GitHub projects</h1>
	<ul>
	    {
		links.map(
		    (link) =>
		    (<li><a href={link.url}>{link.title}</a></li>)
		)
	    }
	</ul>
    </div>
  );
}

export default Repos;
