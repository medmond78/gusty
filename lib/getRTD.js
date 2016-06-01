//Load the request module
var request = require('request');


//Load API key with try/catch
var fileName = "./key.json";
var config;

try {
	config = require(fileName);
} catch (err) {
	config = {}
	console.log("unable to read file '" + fileName + "': ", err)
}

//Define the Real Time Data function
function getRTD(loc, callback) {

	var options = {
		method : 'GET',
		//Overcome the SSL issue with Breezometer. THIS IS BAD PRACTICE.
		rejectUnauthorized : false,
		url : 'https://api.breezometer.com/baqi/',
		qs : {
			lat : loc.lat, 
			lon : loc.lon, 
			key : config.key
		}
	};

	request(options, function (error, response, body) {
	 if (!error && response.statusCode == 200) {
      //------
      //If it is found, callbacks use the err
      //As the first arg, so here we change it to
      //-------
      callback(null, body);
    }
    else {
      //--------
      //If it's not found, throw error?
      //--------
      var error = 'Not Found';
      callback(error);
    }
	});

}

module.exports = getRTD;
