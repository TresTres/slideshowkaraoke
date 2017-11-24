//ImageSource.jsx
import React from 'react';

import {gettyEmbedKey} from './keys.js';
import axios from 'axios';


//axios works off promises

var ImageSourcing = 
{
    findCreativeImg(query)
    {
        var axiosPromise = axios(
        {
            type:'GET',
            url:'https://connect.gettyimages.com/v3/search/images?fields=allowed_use%2Cdisplay_set&phrase=' + query,
            headers:
            {
                'Api-Key': gettyEmbedKey,
                'Accept': 'application/json',  
            }

        })
        .then(function(response)
                {
                    console.log('GET successful');
                    return response.data;
                }
             );
        return axiosPromise;
    }
};

export {ImageSourcing as default};
    
