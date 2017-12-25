//ImageSource.jsx
import React from 'react';
	
import {gettySandboxKey, gettySandboxSecret} from './config.js';
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
			data:'grant_type=client_credentials&client_id=' + encodeURIComponent(gettySandboxKey) + 
			'&client_secret=' + encodeURIComponent(gettySandboxSecret)
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
            url:'https://api.gettyimages.com/v3/search/images/creative?fields=allowed_use%2Cdisplay_set&license_models=royaltyfree&orientations=Horizontal&exclude_nudity=true&phrase=' + query,
            headers:
            {
                'Api-Key': gettySandboxKey,
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
    
