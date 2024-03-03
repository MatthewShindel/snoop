import './SavedLocations.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


export default function SavedLocations({arrayOfLocations}) {
	const uniqueLocations = [...new Set(arrayOfLocations)]
	return (
		<div className="savedLocationsPage">
			<h2>Your Saved Locations</h2>
			<ul className='savedLocations'>
        {uniqueLocations.map((location, index) => (
          <li key={index}>{location}</li>
        ))}
      </ul>
		</div>
	)
}

SavedLocations.propTypes = {
	arrayOfLocations: PropTypes.array.isRequired
}