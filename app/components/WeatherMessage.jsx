var React = require('react');

var WeatherMessage = ({temp,location})=>{
    return(
      <p>temprature of {location} is {temp}</p>
    );
  };

module.exports = WeatherMessage;
