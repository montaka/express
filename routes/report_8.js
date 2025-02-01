
var express = require('express');
var router = express.Router();
const request =require("request");
const options ={
    url:"https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=c222f449baeae3d5d34ab1c345537ed2",
    method:"GET",};



module.exports = router;