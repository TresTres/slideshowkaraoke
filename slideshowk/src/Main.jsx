//Main.jsx
import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home.jsx";
class Main extends Component
{
	render() {
		return(
			<div>
				<h1> Welcome </h1>
				<ul className = "header">
					<li><a href = "/Home">Home</a></li>
					<li><a href= "/Start!">Start!</a></li>
				</ul>
				<div className= "content">

				</div>
			</div>
		);
	}
}

export default Main;
