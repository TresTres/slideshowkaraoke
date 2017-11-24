//index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {style} from './style.js';
import Presentation from './SlideGen.jsx';

//render
document.body.style.backgroundColor = style.root.backgroundColor;
ReactDOM.render(<Presentation />, document.getElementById('root'));

