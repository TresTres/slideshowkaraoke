//Setup.jsx
import React, { Component } from "react";
import Slide from '../Slides/Slide.jsx';
import TextGen from '../Slides/TextGen.jsx';

class Setup extends Component
{
	constructor(props)
	{
		super(props);
		this.state = props;
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit = (e) =>
	{
		
		e.preventDefault();
		this.genSlides();
		console.log(this.state);
		this.props.onSetup({
							startquery: this.state.startquery,
							slidecount: this.state.slidecount,
							slides:		this.state.slides
						   });
	}

	onTextChange = (e) =>
	{
		this.setState({startquery: e.target.value});
	}

	onNumChange = (e) =>
	{
		this.setState({slidecount: e.target.value});
	}

	genSlides = () =>
	{
		let s = this.state.slides;
		let t = this.state.startquery + ":\na presentation";
		let p = this.state.startquery;
		let n = this.state.slidecount;
		//console.log(s, q, n);
		if(s.length === 0)
		{
			for(var i = 0; i < n; i++)
			{
		
				//console.log(i);
				s.push(<Slide
						img = {p}
						txt = {t}/>);
				
				t = TextGen.next(t, i, true);
				p = TextGen.next(p, i, false);
			}
			//console.log(s);
			this.setState({slides: s});
		}
	}


	render()
	{
		
		return(
			<div>
				<h2> Get Started </h2>
				<form onSubmit={this.onSubmit}>
					<div className = "startquery">
						<input type = "text" placeholder="Enter a &quot;Topic&quot;" onChange={this.onTextChange}/>
					</div>
					<div className = "dropdown">
						<select name = "slidecount" onChange={this.onNumChange}>
							<option value="10">10 slides</option>
							<option value = "15">15 slides</option>
							<option value = "20">20 slides</option>
						</select>
					</div>
					<div className = "submission">
						<input type = "submit" value = "Get Started"/>
					</div>
				</form>
			</div>
		)
						
	}
}

export default Setup
