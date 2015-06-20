/**
 * Created by Alicia on 20/06/2015.
 */
var journeyPlanner = require('tfl-journey-planner');

var credentials = require('./config');

console.log(credentials);

var params = {
    from:   {lat: 51.531951985733,  lon: 0.0037377856069111},
    to:     {lat:51.514342387502,   lon: -0.075612503707184}
};

journeyPlanner.fetchRoutes(params, credentials.tfl, function(results) {
    console.log(results); // Do whatever with the results
});