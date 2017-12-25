//SlideGen.js
import React from 'react';
//Token gen
import ImageSourcing from './ImageSource.jsx';
//Slides
import Title from './Slides/Title.jsx';

//slide deck - iterable collection of slides, title slide at front, closing slide at end...how do?
//const slides = [];

//presentation
class Presentation extends React.Component
{
    render()
    {
        return(
                <Title 
                query = 'street'
                title = 'Title'
				token = {ImageSourcing.getAuthorization()}
                />
              );
    }

};
export default Presentation;

