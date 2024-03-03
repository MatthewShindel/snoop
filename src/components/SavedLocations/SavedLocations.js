import './SavedLocations.css'
import { Link } from 'react-router-dom'

export default function SavedLocations({arrayOfLocations}) {
	const uniqueLocations = [...new Set(arrayOfLocations)]
	return (
		<div className="savedLocationsPage">
			<h1>This is the Saved Locations Page</h1>
			<ul>
        {uniqueLocations.map((location, index) => (
          <li key={index}>{location}</li>
        ))}
      </ul>
			<Link to={'/snoop'} className='homePageLink'>
				<h3>
					Click here to go back home
				</h3>
			</Link>
		</div>
	)
}