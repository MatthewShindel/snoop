import './SavedLocations.css'
import { Link } from 'react-router-dom'

export default function SavedLocations() {
	return (
		<div className="savedLocationsPage">
			<h1>This is the Saved Locations Page</h1>
			<Link to={'/snoop'} className='homePageLink'>
				<h3>
					Click here to go back home
				</h3>
			</Link>
		</div>
	)
}