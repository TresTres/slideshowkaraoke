//App.js
import React from 'react';
import ReactDOM from 'react-dom';
import Presentation from './SlideGen.jsx';
//styling
require('./styles.css');

var App = React.createClass({
	//set up the system
	getInitialState: function() {
		var tileCatalog = 
			[
				{name: 'GameStart', tile: GameStart},
				{name: 'Slideshow', tile: Slideshow}
			];
	//start with the game
	



//render
ReactDOM.render(<Presentation />, document.getElementById('root'));

