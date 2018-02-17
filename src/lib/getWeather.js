export default function () {
  const localStorage = window.localStorage;
  var data;
  const tenMinutes = 1000*60*10
  if(localStorage.getItem('weatherResponse') &&  (Date.now() - localStorage.getItem('responseTimestamp')) < tenMinutes) {
    data = JSON.parse(localStorage.getItem('weatherResponse'));
    console.log(new Date(parseInt(localStorage.getItem('responseTimestamp'), 10)));
  }
  else {
    data = fetch('http://api.openweathermap.org/data/2.5/weather?id=4560349&appid=' + process.env.VUE_APP_WEATHER_KEY)
      .then(function (response) {
        var data = response.json();
        return data;
      })
      .then(function(data){
        localStorage.setItem('weatherResponse', JSON.stringify(data));
        localStorage.setItem('responseTimestamp', Date.now());
    }, function( error) {
        console.log(error);
    });
    console.log("Last logged at " + new Date(parseInt(localStorage.getItem('responseTimestamp'), 10)).toString());
    localStorage.setItem('responseTimestamp', Date.now());
  
  }
  return data;
};