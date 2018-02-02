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
    render()
    {
        return(
                <Slide 
                query = 'windmill'
                title = 'Title'
                />
              );
    }

};
export default Presentation;

