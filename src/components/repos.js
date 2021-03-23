import React from 'react';
import '../App.css';

const links = [
    {
	'title': 'boorupaper - set a random image from gelbooru.com as your wallpaper',
	'url': 'https://github.com/AzimovParviz/boorupaper',
        'image-url':''
    },
    {
	'title': 'telegram-temperature-bot - a telegram bot that sends the temperature from the sensor',
	'url': 'https://github.com/AzimovParviz/telegram-temperature-alert',
        'image-url':''
    },
    {
        'title': 'PS Vita game lister - output your games in your Vita\'s app folder in the terminal',
        'url':'https://github.com/AzimovParviz/PSVitaGameLister',
        'image-url':''
    },
    {
	'title': 'holo-cli - use command line to start a hololive stream(s) using mpv',
	'url': 'https://github.com/AzimovParviz/holo-cli',
	'image-url':''
    }
];

function Repos() {
  return (
      <div className="Repos" >
	  <h1>My GitHub projects</h1>
	<ul className="projectList">
	    {
		links.map(
		    (link) =>
		    (<li><a className ="repoLink" href={link.url}>{link.title}</a></li>)
		)
	    }
	</ul>
    </div>
  );
}

export default Repos;
