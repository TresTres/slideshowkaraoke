//SlideGen.js
import React from 'react';
import ReactFontFace from 'react-font-face';
//Slides
import Title from './Slides/Title.jsx';



//presentation
class Presentation extends React.Component
{
    render()
    {
        return(
                <Title 
                query = 'potato'
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

