var axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=571b9a7fca53e47c532c805a028b472c&units=metric&';
module.exports ={
  getTemp:function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestURI = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestURI).then(function(res){
      // debugger;
      if(res.data.cod && res.data.message){ //
        throw new Error(res.data.cod)
      }else{
        return res.data.main.temp;
      }
    },function(res){
      throw new Error(res.data.cod);
    });
  }
};
