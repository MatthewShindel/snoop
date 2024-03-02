import { useState } from 'react';
import './Form.css';
import { getLocationWeather } from '../../ApiCalls';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Form({ navigate, updateLocationInformation }) {
	const [location, setLocation] = useState("");
	const [latitude, setLatitude] = useState("");
	const [longitude, setLongitude] = useState("");

	function submitLocationData(event) {
		event.preventDefault();
		getLocationWeather(location)
		.then(data => {
			updateLocationInformation(data);
			clearInput();
			navigate('/snoop/location')
		})
	}
	function clearInput() {
		setLocation("");
		setLatitude(0);
		setLongitude(0);
	}

	return (
		<div className='formsContainer'>
			<form className='locationForm'>
				<p>Where would you like to go?</p>
				<input
					type='text'
					placeholder='Enter a City Name'
					name='location'
					value={location}
					onChange={event => setLocation(event.target.value)}
				/>
				<button className='submitLocationButton' onClick={submitLocationData}>SUBMIT</button>
			</form>
		</div>
	)
}

