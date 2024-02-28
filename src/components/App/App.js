import { Route, Routes } from 'react-router';
import './App.css';
import Form from '../Form/Form';
import Location from '../Location/Location';
import Error from '../Error/Error';
import SavedLocation from '../SavedLocations/SavedLocations';

function App() {
  return (
    <main className="App">
			<h1> This is the App</h1>
			<Routes>
				<Route path="/snoop" element= {<Form />} />
				<Route path="/snoop/location" element= {<Location />} />
				<Route path="*" element= {<Error />} />
			</Routes>
    </main>
  );
}

export default App;
