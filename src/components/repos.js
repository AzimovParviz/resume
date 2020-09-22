import React from 'react';
import '../App.css';

const links = [
    {
	'title': 'boorupaper - set a random image from gelbooru.com as your wallpaper',
	'url': 'https://github.com/AzimovParviz/boorupaper'
    },
    {
	'title': 'telegram-temperature-bot - a telegram bot that sends the temperature from the sensor',
	'url': 'https://github.com/AzimovParviz/telegram-temperature-alert'
    },
    {
        'title': 'PS Vita game lister - output your games in your Vita\'s app folder in the terminal',
        'url':'https://github.com/AzimovParviz/PSVitaGameLister'
    },
];

function Repos() {
  return (
      <div className="Repos" >
	  <h1>My GitHub projects</h1>
	<ul className="projectList">
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
