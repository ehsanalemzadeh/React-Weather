var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  // getDefaultProps:function(){
  //   return {
  //       location:'xx',
  //       temp:25
  //     };
  // },
  getInitialState:function()
  {
    return {
      isLoading:false
    };
  },
  handleSearch:function(location){
    var that = this;
    this.setState({
        isLoading:true
    });

    OpenWeatherMap.getTemp(location).then(function(temp){
      that.setState(
        {
          location:location,
          temp:temp,
          isLoading:false
        }
      );
    },function(message){
      alert(message);
      that.setState({
        isLoading:false
      });
    });

  },
  render: function(){
    var {isLoading,location,temp} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3>Fetching...</h3>;
      }
      else if(location && temp)
      {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return(
      <div>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});


module.exports = Weather;
