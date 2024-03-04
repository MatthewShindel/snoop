import { Route, Routes } from 'react-router';
import './App.css';
import Form from '../Form/Form';
import Location from '../Location/Location';
import Error from '../Error/Error';
import SavedLocations from '../SavedLocations/SavedLocations';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { dummyData } from '../../ApiCalls';

function App() {
	const navigate = useNavigate();
	const [arrayOfLocations, setArrayOfLocations] = useState([]);
	const [locationInformation, setLocationInformation] = useState();

	function updateLocationInformation(location) {
		setLocationInformation(location)
	}
	function updateArrayOfLocations(location) {
		setArrayOfLocations(prevLocations => [...prevLocations, location])
	}
	useEffect(() => {
		setLocationInformation(dummyData)
	}, [])

	//note, will change /default.png to default.png we deployed
	return (
		<main className="App">
			<header className='appHeader'>
				<NavLink to={'/'} className='navLink' >
					<h3>Home</h3>
				</NavLink>
			<img className='logo' src='/default.png' alt='snoop logo' />
				<NavLink to={'/savedLocations'} className='navLink'>
					<h3>Saved Locations</h3>
				</NavLink>
			</header>

			<Routes>
				<Route path="/" element={<Form navigate={navigate} updateLocationInformation={updateLocationInformation} />} />
				<Route path="/location" element={<Location locationInformation={locationInformation} updateArrayOfLocations={updateArrayOfLocations} navigate={navigate} />} />
				<Route path="/savedLocations" element={<SavedLocations arrayOfLocations={arrayOfLocations} />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</main>
	);
}

export default App;
