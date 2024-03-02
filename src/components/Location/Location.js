import './Location.css'
import { Link } from 'react-router-dom'
import { dummyData } from '../../ApiCalls'

export default function Location(locationInformation){
	
	return (
		<div className="locationPage">
			<header>
			<h1>This is the Location Page</h1>
				
			</header>
			<main>
				<p className='locationName'> {dummyData.name} , {dummyData.sys.country}</p>
				<p className='weather'> {dummyData.weather[0].main}</p>
				<p className='temperature'> {dummyData.main.temp}&#8457;</p>
				<p className='temperatureRange'> {dummyData.main.temp_min}&#8457; - {dummyData.main.temp_max}&#8457;</p>
			</main>
			<Link to={'/snoop'} className='homePageLink'>
				<h3>
					Click here to go back home
				</h3>
			</Link>
		</div>
	)
}