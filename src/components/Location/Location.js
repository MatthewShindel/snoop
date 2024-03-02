import './Location.css'
import { Link } from 'react-router-dom'
import { dummyData } from '../../ApiCalls'
import { useEffect } from 'react';

export default function Location({ locationInformation }) {
	function kelvinToFahrenheit(kelvin) {
		return (kelvin - 273.15) * 9 / 5 + 32;
	}

	console.log(typeof locationInformation.main.temp);

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

			</main>
			<Link to={'/snoop'} className='homePageLink'>
				<h3>
					Click here to go back home
				</h3>
			</Link>
		</div>
	)
}