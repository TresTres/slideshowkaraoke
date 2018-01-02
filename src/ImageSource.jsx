//ImageSource.jsx
import React from 'react';
	
import {shutterstock_id, shutterstock_secret} from './config.js';
import axios from 'axios';
											

//axios uses promises
//OAuth not necessary for this application with Shutterstock

const ImageSourcing = 
{
	//OAuth Token
	//getOAuthToken()
	//{
	//	const auth = ....
	//
	//	return auth;
	//},
	
	//encode authorization in Base64 
	encodeAuthorization()
	{
		const clientID = shutterstock_id;
		const clientSecret = shutterstock_secret;
		//reference error
		if(!clientID || !clientSecret)
		{
			throw new ReferenceError('Shutterstock API client ID or secret are missing.');
			return;
		}
		console.log('Authorization encoded.');
		return 'Basic ' + window.btoa(clientID + ':' + clientSecret);
	},
	
	//search for image - want to only do this once per slide deck
    findCreativeImg(query)
    {
		const APIEndpoint = 'https:/api.shutterstock.com/v2';

		let authorization = this.encodeAuthorization();
		//authorization failed, error handled already
		if(!authorization)
		{
			console.log('--Authorization failed.');
			return;
		}
		//what ajax would have done here
        var axiosPromise = axios(
        {
			type: 'GET',
			url: APIEndpoint + '/images/search',
			params: 'query=' + query,
			headers: 
			{
				Authorization: authorization
			},
			responseType: 'json'
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
    
