//Slide.jsx
import React from 'react';
//ImageSourcing
import ImageSourcing from '../ImageSource.jsx';
//waitImage
import {waitImage} from '../config.js';

class Slide extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
			key: props.key,
            imageQuery: props.query,
            myTitle: props.title
        };

    }

    componentWillMount() //loading, use the default gif
    {
        this.setState(
		{
			title: 'Please wait...',
			image: waitImage
		});
    }
	
    componentDidMount() //successful data returned from shutterstock API
    {
        ImageSourcing.findCreativeImg(this.state.imageQuery)
		.then(function(responseData)
		{
			//console.log(responseData);
			this.setState(
			{
				title: this.state.myTitle,
				image: responseData.data[5].assets.preview.url
				//I did not structure it to be this way
				//There are 20 possible entries in the results list 
				//data[i].assets.preview.url gives the largest jpg usually
			});
		}.bind(this))
		.catch(function(err)
		{
			console.log(err);
		});
    }
	
    render()
    {
        return(
				<div className = "SlideContainer fade">
					<img src = {this.state.image} alt = "image goes here"/>
					<text>{this.state.title}</text>
				</div>
              );
    }
}




export {Slide as default};
