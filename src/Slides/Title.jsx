//Title.jsxb
import React from 'react';
//ImageSourcing
import ImageSourcing from '../ImageSource.jsx';
//waitImage
import {waitImage} from '../config.js';

class Title extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            imageQuery: props.query,
			authToken: props.token,
            myTitle: props.title
        };

    }

    componentWillMount()
    {
        this.setState(
		{
			title: 'Please wait...',
			image: waitImage
		});
    }
	
    componentDidMount()
    {
        ImageSourcing.findCreativeImg(this.state.imageQuery)
		.then(function(data)
		{
			this.setState(
			{
				title: this.state.myTitle,
				image: data.images[0].display_sizes[0].uri
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
				<div className = "SlideBox">
					<h1 className = "PresentationTitle">{this.state.title}</h1>
					<img src = {this.state.image} alt = "image goes here"/>
				</div>
              );
    }
}


export {Title as default};
