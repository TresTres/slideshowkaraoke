//Start.jsx
import React, { Component } from "react";
import Setup from "./Setup.jsx";
import Presentation from "./Presentation.jsx";

class Start extends Component
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			isSetup: false,
			startquery: '',
			slidecount: 10,
			slides: []
		};
		this.onSetup = this.onSetup.bind(this);
	}

	onSetup = (data) =>
	{
		this.setState({
						isSetup: true,
						startquery: data.startquery,
						slidecount: data.slidecount,
						slides: data.slides
					  });
	}

	componentDidUpdate()
	{
		//console.log(this.state);
	}

	render()
	{
		const {isSetup, slides, ...others} = this.state;
		
		
		let content = null;
		if(isSetup)
		{
			content = <Presentation slides = {slides} {...others}/>;
		}
		else
		{
			content = <Setup 
					onSetup = {this.onSetup}
					isSetup = {isSetup}
					slides = {slides}
					{...others} />;
		}

		return(
			<div>
				{content}
			</div>
		);
	}

}


export default Start
