//SlideGen.js
import React from 'react';
import ReactFontFace from 'react-font-face';
//Slides
import Title from './Slides/Title.jsx';

//slide gen




//slide deck
//const slides = 

//presentation
class Presentation extends React.Component
{
    render()
    {
        return(
                <Title 
                query = 'street'
                title = 'P O T A T O'
                />
              );
    }

};
//font configuration 
let fontConfig = 
{
    google: 
        [ 'Bree Serif' ]
};

export default ReactFontFace(Presentation, fontConfig);

