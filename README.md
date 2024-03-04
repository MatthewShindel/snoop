# Snoop:
![Snoop](/public/default.png)

Snoop is a simplified weather lookup app, usable on phones or on desktop. It provides users with the ability to instantly look up the weather anywhere on the planet. When you login to the amin webpage, you'll be greeted by 2 forms.

![Snoop Homepage](/public/SnoopHomePage.png)

Simply type in either the name of a city or an latitude/longitude coordinate, and you'll get an display that shows you the weather of that location!

![Snoop Weather output](/public/SnoopWeatherOutput.png)

You can also save yoru favorite locations for later, with are store in a list:

![Snoop Homepage](/public/SnoopFavoriteLocations.png)

Be aware that the APi only looks at the most populated city with that name(i.e, the API will return information about London, GB and not London, Ohio). Additionally, the API will also return the closest major city or "node" that has weather data, if you aren't precise with your latitude or longitude.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Using This application:

This application is deployed at this URL:
https://snoop-three.vercel.app/ 

The api that this application uses is located at RapidAPI, specifically this api:
https://rapidapi.com/worldapi/api/open-weather13

In the future, I'll reduce the throughput of this API in, in which case, you'll either need to wait some time, since the API will rate limit this application, or you can get you own connection to the API and connect it yourself.

Additionally, if you wish you use this application locally, you can for this do the following:

1. clone down this repo using 'git clone'
2. cd into that repo
3. run 'npm install' to install the needed packages
4. run 'npm start' to start the application.

The application with run in your broswer at
[http://localhost:3000](http://localhost:3000)

Addtionally, if you choose to run this application locally, you can run run my Cypress testing suite. This tests the applications functionality, including happy path and sad path that users might take in the application.

### Learning Goals:

My main goal for this project was to develop an entire React Application on my own without any outside help. I would only use the tools i've learned in my past project, as well as resources if researched myself on the internet. I built this entire application on my own, learned how to deploy the application on my own, and solved any challenges by myself.

### Wins and Challenges:

This application was suprisingly very difficult to build. The main challenges I had were in the CSS styling: making sure all the information on the webpage was visible and easily legible to the user was a major challenge. 

My biggest win, however, were how quickly I built the rest of the application. The cypress testing was very easy for me, despite this being the first time I'm building a test bench on my own. Additionally, the API was suprisingly easy to understand, thanks to how I've worked with RapidAPI's in my past projects.