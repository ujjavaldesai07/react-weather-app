# react-weather-app
Weather application built using ReactJS, Webpack & NodeJS.

**DEMO**
 - Deployed to Heroku Cloud: 

	http://getweather-app.herokuapp.com
	
**Note:** It is only running on a free dyno, so it may take some time before it responds.

**Steps for executing using docker:**
1. Clone/Download the repository.

2. Set the environmental variables which will be impacted on openWeatherMap.jsx.
   get the api key from here[https://openweathermap.org] by signing up.
   
   API_KEY= < api-key > 

3. Run npm install in terminal to load the dependencies.
   ```
	    npm install
   ```
4. Run webpack to build the app that produces public/bundle.js.
   ```
	    webpack
   ```
5. Run node server.
   ```
	    node server.js
   ```
