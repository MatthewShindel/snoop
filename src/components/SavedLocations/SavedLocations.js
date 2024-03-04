import './SavedLocations.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


export default function SavedLocations({arrayOfLocations}) {
	const uniqueLocations = [...new Set(arrayOfLocations)]
	return (
    <div className="savedLocationsPage">
      {uniqueLocations.length === 0 ? (
        <h2>You have no favorite Locations yet!</h2>
      ) : (
        <div>
          <h2>Your Saved Locations</h2>
          <ul className="savedLocations">
            {uniqueLocations.map((location, index) => (
              <li key={index}>{location}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
	)
}

SavedLocations.propTypes = {
	arrayOfLocations: PropTypes.array.isRequired
}