//ImageSource.jsx
import React from 'react';
	
import {gettyEmbedKey, gettyEmbedSecret} from './config.js';
import axios from 'axios';
											

//axios uses promises

const ImageSourcing = 
{
	//get the client credentials
	getOAuth2Token()
	{
		var axiosPromise = axios(
		{
			type:'POST',
			url:'https://connect.gettyimages.com/oauth2/token',
			headers:
			{
				'client_id': gettyEmbedKey,
				'client_secret': gettyEmbedSecret
			}
		})
		.then(function(response)
		{
			console.log('OAuth2Token received');
			return response.data;
		})
		.catch(function(err)
		{
			console.log(err);
		});
		return axiosPromise;
	},
	
	//assemble authorization
	getAuthorization()
	{
		var auth = this.getOAuth2Token()
		.then(function(data)
		{
			let token_type = data.token_type;
			let token = data.access_token;
			return token_type + ' ' + token;
		});
		return auth;
	},

	//search for a creative image - want to only do this once per slide deck
    findCreativeImg(query, authorization = '')
    {
        var axiosPromise = axios(
        {
            type:'GET',
            url:'https://connect.gettyimages.com/v3/search/images/creative?fields=allowed_use%2Cdisplay_set&phrase=' + query,
            headers:
            {
                'Api-Key': gettyEmbedKey,
				'Authorization': authorization,
                'Accept': 'application/json'
		    }
        })
        .then(function(response)
		{
			console.log('image search successful');
			return response.data;
		})
		.catch(function(err)
		{
			console.log(err);
		});
        return axiosPromise;
    }
};

export {ImageSourcing as default};
    
