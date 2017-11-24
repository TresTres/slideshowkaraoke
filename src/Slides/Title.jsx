//Title.js
import React from 'react';
import {TitleSlide} from 'react-presents';
//ImageSourcing
import ImageSourcing from '../ImageSource.jsx';




class Title extends React.Component
{  
    constructor(props)
    {
        super(props);
        this.state = 
        {
            title: 'Default Title',
            image: 'http://media.gettyimages.com/photos/suspicious-cat-portrait-picture-id538412497',
            query: props.query
        };
    }
    componentDidMount()
    {
        ImageSourcing.findCreativeImg(this.state.query)
            .then(function(data)
                  {
                      this.setState(
                              {
                                image: data.images[0].display_sizes[0].uri
                              });
                  }.bind(this))
           .catch(function(err)
                  {
                      console.log(err);
                  }
                 );
                              
    }
    render()
    {
        return(
                <TitleSlide>
                    <h1>{this.state.title}</h1>
                    <h1>{this.state.query}</h1>
                    <img src = {this.state.image} alt = "image goes here"/>
                </TitleSlide>
              );
    }
}

export {Title as default};
