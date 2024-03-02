export const getLocationWeather = (location) => {
	location = location.trim();
	let finalLocation = location.split(' ').join('%20');

	const url = `https://open-weather13.p.rapidapi.com/city/${finalLocation}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '8e3c03a57bmshcf9c926514fc323p15ca95jsna29d71f8a66a',
			'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
		}
	};

	return fetch(url, options)
		.then(response => {
			if (!response.ok) {
				throw new Error(`${response.status}: ${response.statusText}`)
			}
			return response.json();
		})
}

export let dummyData = {
    "coord": {
        "lon": -74.006,
        "lat": 40.7143
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 55.63,
        "feels_like": 54.9,
        "temp_min": 48.94,
        "temp_max": 63.16,
        "pressure": 1004,
        "humidity": 85
    },
    "visibility": 10000,
    "wind": {
        "speed": 11.5,
        "deg": 170
    },
    "clouds": {
        "all": 100
    },
    "dt": 1709144058,
    "sys": {
        "type": 1,
        "id": 4610,
        "country": "US",
        "sunrise": 1709119951,
        "sunset": 1709160308
    },
    "timezone": -18000,
    "id": 5128581,
    "name": "New York",
    "cod": 200
}