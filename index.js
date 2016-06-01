var request = require('request');
var getRTD = require('./lib/getRTD');

var loc = {	'lat' : '40.7324296',	'lon' : '-73.9977264'};

getRTD(loc, function(err,resp){
	
	var parsed = JSON.parse(resp);
	console.log(parsed);
});
