describe('test happy path', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/snoop')
	})
	it('should be able to fill out form by location, find weather info, add to favorites and return home', () => {
		cy.intercept({
			method: 'GET',
			url: `https://open-weather13.p.rapidapi.com/city/london`,
			headers: {
				'X-RapidAPI-Key': '8e3c03a57bmshcf9c926514fc323p15ca95jsna29d71f8a66a',
				'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
			}
		}, (req) => {
			req.reply({
				statusCode: 200,
				fixture: 'example.json'
			});
		})
		cy.get('.appHeader .navLink').contains('Home').should('exist')
			.get('.appHeader .logo').should('exist')
			.get('.appHeader .navLink').contains('Saved Locations').should('exist')
			.get('.locationForm input[name="location"]').type('london')
			.get('.locationForm#byName .submitLocationButton').click()
			.url().should('eq', 'http://localhost:3000/snoop/location')
			.get('.locationName').should('have.text', ' New York, US')
			.get('.weather').should('have.text', ' Clouds')
			.get('.temperature p').eq(0).should('have.text', ' 55.63℉')
			.get('.temperatureRange').should('have.text', ' 48.94℉ - 63.16℉')
			.get('.addFavoriteLocation').should('have.text', ' Add Location as Favorite')
			.get('.addFavoriteLocation').click()
			.url().should('eq', 'http://localhost:3000/snoop/savedLocations')
			.get('.savedLocationsPage .savedLocations li').should('have.length', 1)
			.get('.savedLocationsPage .savedLocations li').should('have.text', 'New York, US')
			.get('.appHeader .navLink').contains('Home').click()
			.url().should('eq', 'http://localhost:3000/snoop')
	})
	it('should be able to test other form in webpage' , () => {
		cy.intercept({
			method: 'GET',
			url: `https://open-weather13.p.rapidapi.com/city/latlon/51.5085/-0.1257`,
			headers: {
				'X-RapidAPI-Key': '8e3c03a57bmshcf9c926514fc323p15ca95jsna29d71f8a66a',
				'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
			}
		}, (req) => {
			req.reply({
				statusCode: 200,
				fixture: 'example.json'
			});
		})
		cy.get('#byLatLong input[name="latitude"]').type('51.5085')
    .get('#byLatLong input[name="longitude"]').type('-0.1257')
		.get('#byLatLong button.submitLocationButton').click()
		.url().should('include', '/snoop/location')
		.get('.locationName').should('have.text', ' New York, US')
		.get('.weather').should('have.text', ' Clouds')
		.get('.temperature p').eq(0).should('have.text', ' 55.63℉')
		.get('.temperatureRange').should('have.text', ' 48.94℉ - 63.16℉')
		.get('.addFavoriteLocation').should('have.text', ' Add Location as Favorite')
		.get('.addFavoriteLocation').click()
		.url().should('eq', 'http://localhost:3000/snoop/savedLocations')
		.get('.savedLocationsPage .savedLocations li').should('have.length', 1)
		.get('.savedLocationsPage .savedLocations li').should('have.text', 'New York, US')
		.get('.appHeader .navLink').contains('Home').click()
		.url().should('eq', 'http://localhost:3000/snoop')
	})
	it('Should be able to handle sad path errors, ie a bad city name or bad coordinates' , () => {
		
	})
})