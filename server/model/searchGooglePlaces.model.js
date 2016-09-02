var auth = require('.auth');
var request = require("request");

var searchGooglePlaces = module.exports;

searchGooglePlaces.getRestaurantList = function(params){
  var location = params.location;

  var options = { method: 'GET',
    url: 'https://maps.googleapis.com/maps/api/place/textsearch/xml',
    qs: 
     { query: location,
       key: auth.googlePlacesKey + '\t  ',
       type: 'restaurant',
       opennow: 'true',
       fields: 'results (formatted_address, name, opening_hours/open_now, photos)'   },
    headers: 
     { 'postman-token': '21482a77-ec74-c13a-99c5-06dcad37ba43',
       'cache-control': 'no-cache' },
    body: '{\n  "title": "Michael T\'s GooglePlaces",\n  "content": "I LOVE LAMP!"\n}' };


  request(options, function (error, response, body) {
    if (error) throw new Error(error);
      console.log(body);
      return response;
  });
}




