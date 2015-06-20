var express = require('express');
var tflJourneyPlanner = require('tfl-journey-planner');
var credentials = require('../config');

var router = express.Router();


/* GET journeys listing. */
router.post('/', function(request, response){
  tflJourneyPlanner.fetchRoutes(request.body, credentials.tfl, function(results) {
    response.send(results);    // echo the result back
  });
});

module.exports = router;
