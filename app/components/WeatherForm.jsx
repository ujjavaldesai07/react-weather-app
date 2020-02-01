var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    // search only if we non-null string.
    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="location" placeholder="Search weather by city"/>
            <button className="button expanded">Get Weather</button>
          </form>
        </div>
    );
  }
});

module.exports = WeatherForm;
