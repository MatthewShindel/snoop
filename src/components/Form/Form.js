import { useState } from 'react';
import './Form.css';
import { getLocationWeather, getLatLongWeather } from '../../ApiCalls';
import { Navigate, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';


export default function Form({ navigate, updateLocationInformation }) {
	const [location, setLocation] = useState("");
	const [latitude, setLatitude] = useState("");
	const [longitude, setLongitude] = useState("");

	function submitLocationData(event) {
		event.preventDefault();
		getLocationWeather(location)
			.then(data => {
				if (data.cod === '404') {
					throw new Error('City not found');
				}
				updateLocationInformation(data);
				clearInput();
				navigate('/location')
			})
			.catch(error => {
				console.error('Error fetching location weather:', error);
				if (error.message === 'City not found') {
						navigate('/errorPage');
				} else {
						navigate('/errorPage'); 
				}
		});
	}
	function submitLatLongData(event) {
		event.preventDefault();
		getLatLongWeather(latitude, longitude)
			.then(data => {
				if (data.cod === '400') {
					throw new Error('City not found');
				}
				updateLocationInformation(data);
				clearInput();
				navigate('/location')
			})
			.catch(error => {
				console.error('Error fetching location weather:', error);
				if (error.message === 'City not found') {
						navigate('/errorPage');
				} else {
						navigate('/errorPage'); 
				}
		});
	}

	function clearInput() {
		setLocation("");
		setLatitude(0);
		setLongitude(0);
	}

	return (
		<div className='componentContainer'>
			<h3>Where would you like to go?</h3>
			<div className='formsContainer'>
				<form className='locationForm' id='byName'>
					<h4>By City Name?</h4>
					<input
						type='text'
						placeholder='Enter a City Name'
						name='location'
						value={location}
						onChange={event => setLocation(event.target.value)}
					/>
					<button className='submitLocationButton' onClick={submitLocationData}>SUBMIT</button>
				</form>

				<form className='locationForm' id='byLatLong'>
				<h4>By Latitude and Longitude?</h4>
					<input
						type='text'
						placeholder='Enter a Latitude: -90 to 90'
						name='latitude'
						value={latitude}
						onChange={event => setLatitude(event.target.value)}
					/>
					<input
						type='text'
						placeholder='Enter a Longitude: -180 to 180'
						name='longitude'
						value={longitude}
						onChange={event => setLongitude(event.target.value)}
					/>
					<button className='submitLocationButton' onClick={submitLatLongData}>SUBMIT</button>
				</form>
			</div>
		</div>
	)
}

Form.propTypes = {
	navigate: PropTypes.func.isRequired,
	updateLocationInformation: PropTypes.func.isRequired
}


