//Slide.jsx
import React from 'react';
//ImageSourcing
import ImageSourcing from './ImageSource.jsx';
//waitImage
var config = require('../config.json');

class Slide extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state =
        {	
			img: props.img,
            txt: props.txt,
        };

    }

    componentWillMount() //loading, use the default gif
    {
        this.setState(
		{
			text: 'Please wait...',
			image: config.waitImage
		});
    }
	
    componentDidMount() //successful data returned from shutterstock API
    {
        ImageSourcing.findCreativeImg(this.state.img)
		.then(function(responseData)
		{
			//console.log(responseData);
			this.setState(
			{
				text: this.state.txt,
				image: responseData.data[1].assets.large_thumb.url
				
				//I did not structure it to be this way
				//There are 20 possible entries in the results list 
				//data[i].assets.preview.url gives the largest jpg usually
			});
		}.bind(this))
		.catch(function(err)
		{
			console.log(err);
		});
		//console.log("mounted");
		console.log(this.state.image);	
    }
	
    render()
    {
		
        return(
				<div className = "SlideContainer fade">
					<img src = {this.state.image} alt = "image goes here"/>
					<text>{this.state.text}</text>
				</div>
              );
    }
}




export {Slide as default};
