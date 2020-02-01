var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

  // set the initial state
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;

    // set the initial props value to
    // undefined because we dont want to use stale
    // values except isLoading.
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {

      // reset isLoading
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (error) {

      // reset isLoading
      that.setState({
        isLoading: false,
        errorMessage: error.message
      });
    });
  },

  componentDidMount: function() {
    var location = this.props.location.query.location;

    // search the location and reset in the location
    // in url to '/'
    if(location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function(newProps) {
    // props will be received from another component
    // for eg Examples Component link will be
    // redirect to Weather Component.
    var location = newProps.location.query.location;

    // search the location and reset in the location
    // in url to '/'
    if(location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function () {
    var {isLoading, temp, location, errorMessage} = this.state;

    // nested function for returning conditional jsx code.
    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError() {
        if(typeof errorMessage === 'string') {
          return (
              <ErrorModal message={errorMessage}/>
          )
        }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
