import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import getTemp from 'openWeatherMap';

var Weather = React.createClass({
    getInitialState: function() {
        return {
            location: 'Miami',
            temp: 88
        }
    },

    handleSearch: function(location) {
        getTemp(location).then(temp => {
            this.setState({
                location,
                temp
            });
        });
    },

    render: function() {
        const { temp, location } = this.state;
        
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch} />
                <WeatherMessage temp={temp} location={location} />
            </div>
        );
    }
});

module.exports = Weather;