const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()



const apiKey = '8d71c2398310bc61bca7c899bdcf690c';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', {weather: null, error: null});
})

app.post('/', (req, res) => {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;




  request(url, (err, response, body) => {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      var weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }

     //

  const mongoose = require('mongoose'); 
  mongoose.connect('mongodb://localhost/playground')   
  .then(() => console.log('Connected…'))   
  .catch(err => console.error('Connection failed…'));
  
  //
  const courseSchema = new mongoose.Schema({ 
                          name: String,     
                          price: Number  });
  
  
  const Course = mongoose.model('Course', courseSchema);
  
  let course = new Course({ name: city, price: weather.main.temp }); course = course.save();
  
    //

  });

  
 
})



//

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
