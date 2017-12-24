//Title.jsx
import React from 'react';
//ImageSourcing
import ImageSourcing from '../ImageSource.jsx';
//waitImage
import {waitImage} from '../config.js';

import '../styles.css';

class Title extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            query: props.query,
            myTitle: props.title,
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
        ImageSourcing.findCreativeImg(this.state.query)
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
				<div className = "Slide">
                    <h1>{this.state.title}</h1>
                    <img src = {this.state.image} alt = "image goes here"/>
				</div>
              );
    }
}


export {Title as default};
