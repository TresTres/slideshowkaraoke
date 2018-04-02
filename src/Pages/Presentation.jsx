//Presentation.jsx
import React from 'react';
//Slides
import Slide from '../Slides/Slide.jsx';

class Presentation extends React.Component
{

	constructor(props)
	{
		super(props);
		this.state = 
		{	
			currentkey: 0,
			slidecount: props.slidecount,
			query: props.startquery,
			slides: props.slides,
			currentslide: props.slides[0] 
		};
	}

	componentDidMount() 
	{
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.onLeftKey = this.onLeftKey.bind(this);
		this.onRightKey = this.onRightKey.bind(this);
        window.addEventListener("keydown", this.handleKeyDown);
    }

	componentWillUnmount() 
	{
        window.removeEventListener("keydown", this.handleKeyDown);
    }

	componentDidUpdate()
	{
		console.log(this.state);
	}

	handleKeyDown(e)
	{
		//console.log(e.key);
		if(e.key === 'ArrowLeft')
		{
			e.preventDefault();
			this.onLeftKey(e);
		}
		if(e.key === 'ArrowRight')
		{
			e.preventDefault();
			this.onRightKey(e);
		}
		
	}

	onLeftKey = (e) => 
	{
		let ck = this.state.currentkey;
		if(ck <= 0)
		{
			ck = 0;
		}
		else
		{
			ck--;
		}
		this.setState({currentkey: ck});
	}

	onRightKey = (e) =>
	{
		let sc = this.state.slidecount;
		let ck = this.state.currentkey;
		if(ck >= sc)
		{
			ck = sc;
		}
		else
		{
			ck++;
		}
		this.setState({currentkey: ck});
	}


	
    render()
    {

		return(
			
			<div>
				{this.state.currentslide}
			</div>);
    }

}

export default Presentation;

