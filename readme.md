# react-weather-app
Build Weather application using React JS, Foundation, Webpack & Node JS.

**DEMO**
 - Deployed to Heroku Cloud: 

	http://getweather-app.herokuapp.com
	
**Note:** 
1. It is only running on a free dyno, so it may take some time before it responds.
2. Data will be reset to default after every 15 mins by the scheduler.

**Steps for executing using docker:**
1. Clone/Download the repository.

2. Set the environmental variables which will be impacted on openWeatherMap.jsx.
   get the api key from here[https://openweathermap.org] by signing up.
   
   API_KEY=<api-key> 

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
