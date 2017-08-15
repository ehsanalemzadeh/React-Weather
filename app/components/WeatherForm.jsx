var React = require('react');

var WeatherForm = React.createClass({
  onBtnSubmit:function(e){
    e.preventDefault();
    // var cityName = this.refs.refCityName.value;
    var location = this.refs.refCityName.value;
    if(location.length>0)
    {
      this.refs.refCityName.value ='';
      this.props.onSearch(location);
    }
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.onBtnSubmit}>
          <h1>Get Weather</h1>
          <input type="text" ref="refCityName"/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
