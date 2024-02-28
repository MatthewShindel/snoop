import { useState } from 'react';
import './Form.css';
import { getLocationWeather } from '../../ApiCalls';
import { useNavigate } from 'react-router-dom';

export default function Form(){
  const [location,setLocation] = useState("");
  const [zipcode, setZipcode] = useState("");
	const validZipcode = /^\d{5}(?:[-\s]\d{4})?$/gm;
	function submitLocationData(event) {
		event.preventDefault();

	}
	function clearInput() {
		setLocation("");
		setZipcode(0);
	}

    return (
			<div className='formsContainer'>
      <form className='locationForm'>
				<p>Where would you like to go?</p>
        <input
          type='text'
          placeholder='Enter a City Name'
          name='location'
          value={location}
					onChange={event => setLocation(event.target.value)}
        />
        <button className='submitLocationButton' onClick={submitLocationData}>SUBMIT</button>
      </form>
			</div>
    )
}

