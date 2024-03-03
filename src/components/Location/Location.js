import './Location.css'
import { Link, Navigate } from 'react-router-dom'
import { dummyData } from '../../ApiCalls'
import { useEffect } from 'react';
import PropTypes from 'prop-types';


export default function Location({ locationInformation , updateArrayOfLocations, navigate}) {
	function kelvinToFahrenheit(kelvin) {
		return (kelvin - 273.15) * 9 / 5 + 32;
	}
	function addFavoriteLocation(event) {
		const locationString = `${locationInformation.name}, ${locationInformation.sys.country}`;
		updateArrayOfLocations(locationString);
		navigate('/snoop/savedLocations')
	}

	return (
		<div className="locationPage">
			<main className='locationInformation'>
				<h2 className='locationName'> {locationInformation && locationInformation.name}, {locationInformation && locationInformation.sys && locationInformation.sys.country}</h2>
				<h2 className='weather'> {locationInformation && locationInformation.weather[0].main}</h2>
				{locationInformation.main.temp > 200 && (
					<div className='temperature'>
						<p> {kelvinToFahrenheit(locationInformation.main.temp).toFixed(2)}°F</p>
						<p className='temperatureRange'> {kelvinToFahrenheit(locationInformation.main.temp_min).toFixed(2)}°F - {kelvinToFahrenheit(locationInformation.main.temp_max).toFixed(2)}°F</p>
					</div>
				)}
				{locationInformation.main.temp <= 200 && (
					<div className='temperature'>
						<p> {locationInformation && locationInformation.main.temp.toFixed(2)}&#8457;</p>
						<p className='temperatureRange'> {locationInformation && locationInformation.main.temp_min.toFixed(2)}&#8457; - {locationInformation && locationInformation.main.temp_max.toFixed(2)}&#8457;</p>
					</div>
				)}
				<button className='addFavoriteLocation' onClick={addFavoriteLocation} > Add Location as Favorite</button>
			</main>
		</div>
	)
}

Location.propTypes = {
  locationInformation: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sys: PropTypes.shape({
      country: PropTypes.string.isRequired
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        main: PropTypes.string.isRequired
      })
    ).isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};