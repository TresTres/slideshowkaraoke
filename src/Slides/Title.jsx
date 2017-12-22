/*jshint eversion: 6*/
//Title.jsx
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
            query: props.query,
            myTitle: props.title
        };

    }
    componentWillMount()
    {
        this.setState(
                {
                    title: 'Please wait...',
                    image: 'http://media.gettyimages.com/photos/suspicious-cat-portrait-picture-id538412497',
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
                  }
                 );
    }
    render()
    {
        return(
                <TitleSlide>
                    <h1>{this.state.title}</h1>
                    <img src = {this.state.image} alt = "image goes here"/>
                </TitleSlide>
              );
    }
}


export {Title as default};
