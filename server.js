const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const request = require('request');
const apiKey = 'e6555ca496e59cd15af0a34b0edab960';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
    res.render('index');
})

app.post('/', function (req, res) {
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
  request(url, function (err, response, body) {
      if(err){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weather = JSON.parse(body)
        if(weather.main == undefined){
          res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
          let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
          res.render('index', {weather: weatherText, error: null});
        }
      }
    });
  })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})