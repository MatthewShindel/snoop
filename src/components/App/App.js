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
	const [arrayOfLocations,setArrayOfLocations] = useState([]);
	const [locationInformation, setLocationInformation] = useState();

	function updateLocationInformation(location) {
		setLocationInformation(location)
	}
	function updateArrayOfLocations(location) {
		setArrayOfLocations(prevLocations => [...prevLocations,location])
	}
	useEffect(() => {
		setLocationInformation(dummyData)
	}, [])


  return (
    <main className="App">
			<header> 
				<h1> This is the App</h1>
				<NavLink to={'/snoop/savedLocations'}>
				<h3>
					Click here to go to your savedLocationsPage
				</h3>
				</NavLink>
			</header>

			<Routes>
				<Route path="/snoop" element= {<Form navigate = {navigate} updateLocationInformation = {updateLocationInformation} />} />
				<Route path="/snoop/location" element= {<Location locationInformation={locationInformation}/>} />
				<Route path="/snoop/savedLocations" element= {<SavedLocations />} />
				<Route path="*" element= {<Error />} />
			</Routes>
    </main>
  );
}

export default App;
