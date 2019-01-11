
let request = require('request');

let apiKey = 'e6555ca496e59cd15af0a34b0edab960';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});