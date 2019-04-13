import React from 'react';

const Weather = props => (
	<div className="weather__info">
		{
			props.city && props.country && <p className="weather__key">LOCATION: 
			<span className="weather__value"> {props.country}, {props.city} </span>
			</p>
		}
		{
			props.temperature && <p className="weather__key">TEMPERATURE: 
			<span  className="weather__value"> {props.temperature}</span>
			</p>
		}
		{
			props.humidity && <p className="weather__key">HUMIDITY: 
			<span className="weather__value"> {props.humidity}</span>
			</p>
		}
		{
			props.description && <p className="weather__key">CONDITIONS: 
			<span className="weather__value"> {props.description}</span>
			</p>
		}
		{
			props.error && <p  className="weather__error">{props.error}</p>
		 }
	</div>
);

export default Weather;