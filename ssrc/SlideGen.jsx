//SlideGen.js
import React from 'react';
//Token gen
import ImageSourcing from './ImageSource.jsx';
//Slides
import Slide from './Slides/Slide.jsx';

//slide deck - iterable collection of slides, title slide at front, closing slide at end...how do?
//const slides = [];

//presentation
class Presentation extends React.Component
{
	//var slides = [];

	constructor(props)
	{
		super(props);
		this.state = 
		{
			number: props.number,
			query: props.startQuery,
			slides: []
		};
	}
	componentWillMount() //loading
	{
		
 	}

	componentDidMount()
    render()
    {
		
		//var slides = [];
		for(let i = 0; i < ; i++)
		{
			slides.push(
					<Slide
						key={i}
						query="banana"
						title="Title"
						/>);
		};
		return(
				<tbody>{slides}</tbody>
			  );
    }

};
export default Presentation;

