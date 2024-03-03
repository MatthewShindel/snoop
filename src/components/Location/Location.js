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
			<header>
				<h1>This is the Location Page</h1>

			</header>
			<main>
				<p className='locationName'> {locationInformation && locationInformation.name}, {locationInformation && locationInformation.sys && locationInformation.sys.country}</p>
				<p className='weather'> {locationInformation && locationInformation.weather[0].main}</p>

				{locationInformation.main.temp > 200 && (
					<div>
						<p className='temperature'>Temperature: {kelvinToFahrenheit(locationInformation.main.temp).toFixed(2)}°F</p>
						<p className='temperatureRange'>Temperature Range: {kelvinToFahrenheit(locationInformation.main.temp_min).toFixed(2)}°F - {kelvinToFahrenheit(locationInformation.main.temp_max).toFixed(2)}°F</p>
					</div>
				)}

				{locationInformation.main.temp <= 200 && (
					<div>
						<p className='temperature'> {locationInformation && locationInformation.main.temp.toFixed(2)}&#8457;</p>
						<p className='temperatureRange'> {locationInformation && locationInformation.main.temp_min.toFixed(2)}&#8457; - {locationInformation && locationInformation.main.temp_max.toFixed(2)}&#8457;</p>
					</div>
				)}
				<button className='addFavoriteLocation' onClick={addFavoriteLocation} > Add Location as Favorite</button>

			</main>
			<Link to={'/snoop'} className='homePageLink'>
				<h3>
					Click here to go back home
				</h3>
			</Link>
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