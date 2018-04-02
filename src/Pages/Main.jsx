//Main.jsx
import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import HowToPlay from "./HowToPlay.jsx";
import Start from "./Start.jsx";

class Main extends Component
{
	render() {
		return(
			<HashRouter>
				<div>
					<h1> Welcome </h1>
					<ul className = "header">
						<li>
							<NavLink to = "/HowToPlay" activeClassName = "selected">
								How To Play
							</NavLink></li>
						<li>
							<NavLink to = "/Start" activeClassName = "selected">
								Get Started
							</NavLink></li>
				</ul>
					<div className= "content">
						<Route exact path = "/HowToPlay" component = {HowToPlay}/>
						<Route exact path = "/Start" component = {Start}/>

					</div>
				</div>
			</HashRouter>
		);
	}
}

export default Main;
