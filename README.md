# Node TFL Journey Planner
> A simple Node wrapper for the for fetching real-time journey's from the TFL API

## Install
```
npm install git://github.com/Lissy93/node-tfl-journey-planner.git --save
```

## Usage
```javascript
tflJourneyPlanner = require('tfl-journey-planner');

// Specify locations in this format
locations = {
  to: {lat: 51.5002452, lng: 0.0035842},
  from: {lat: 51.5131652, lng: -0.0905267}
};

options = {}; // Specify additional options if you want (see below)

tflJourneyPlanner(locations, options, function(results){
  console.log(results); // Do awesome stuff with the TFL results!
});
```

## Locations
Locations can either be specified like:
```javascript
locations = {
  to: {lat: 51.5002452, lng: 0.0035842},
  from: {lat: 51.5131652, lng: -0.0905267}
}
```

or with their text value
```javascript
locations = {
  to: 'Aldgate East',
  from: 'London Bridge'
};
```
However, using text values will more than likley have many matches, so your response may not be as you'd planned.

## Specifying additional options
The second param is a JSON object where you can put any of the following:
| OPTION                  | DEFAULT     | EXPLINATION                                                                                                                                                               |
|-------------------------|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| via                     |             | Optional. Travel through (if in coordinate format then must be "longitude,latitude")                                                                                      |
| nationalSearch          | [False]     | Optional. Does the journey cover stops outside London? eg. "nationalSearch=true"                                                                                          |
| date                    |             | Optional. The date must be in yyyyMMdd format                                                                                                                             |
| time                    |             | Optional. The time must be in HHmm format                                                                                                                                 |
| timeIs                  | [Departing] | Optional. Does the time given relate to arrival or leaving time? Possible options: "departing" | "arriving"                                                               |
| journeyPreference       | [LeastTime] | Optional. The journey preference eg possible options: "leastinterchange" | "leasttime" | "leastwalking"                                                                   |
| mode                    |             | Optional. The mode must be a comma separated list of modes. eg possible options: "public-bus,overground,train,tube,coach,dlr,cablecar,tram,river,walking,cycle"           |
| accessibilityPreference |             | Optional. The accessibility preference must be a comma separated list eg. "noSolidStairs,noEscalators,noElevators,stepFreeToVehicle,stepFreeToPlatform"                   |
| fromName                |             | Optional. From name is the location name associated with a from coordinate                                                                                                |
| toName                  |             | Optional. To name is the label location associated with a to coordinate                                                                                                   |
| viaName                 |             | Optional. Via name is the location name associated with a via coordinate.                                                                                                 |
| maxTransferMinutes      |             | Optional. The max walking time in minutes for transfer eg. "120"                                                                                                          |
| maxWalkingMinutes       |             | Optional. The max walking time in minutes for journeys eg. "120"                                                                                                          |
| walkingSpeed            | [Average]   | Optional. The walking speed. eg possible options: "slow" | "average" | "fast".                                                                                            |
| cyclePreference         | [None]      | Optional. The cycle preference. eg possible options: "allTheWay" | "leaveAtStation" | "takeOnTransport" | "cycleHire"                                                     |
| adjustment              |             | Optional. Time adjustment command. eg possible options: "TripFirst" | "TripLast"                                                                                          |
| bikeProficiency         |             | Optional. A comma separated list of cycling proficiency levels. eg possible options: "easy,moderate,fast"                                                                 |
| alternativeCycle        | [False]     | Optional. Option to determine whether to return alternative cycling journey                                                                                               |
| alternativeWalking      | [True]      | Optional. Option to determine whether to return alternative walking journey                                                                                               |
| applyHtmlMarkup         | [False]     | Optional. Flag to determine whether certain text (e.g. walking instructions) should be output with HTML tags or not.                                                      |
| useMultiModalCall       | [False]     | Optional. A boolean to indicate whether or not to return 3 public transport journeys, a bus journey, a cycle hire journey, a personal cycle journey and a walking journey |
| walkingOptimization     | [False]     | Optional. A boolean to indicate whether to optimize journeys using walking                                                                                                |

Specify options like this:
```javascript
options = {
    walkingOptimization: true,
    bikeProficiency: 'easy',
    accessibilityPreference: 'noEscalators'
}
```

## Developing
Written in CoffeeScript, run `gulp build` to build, or `gulp watch` to watch for changes then build

## Unit Tests
`npm test`
// todo

## Issues
Report on GitHub repo page





### Authenticating
Authentication is not required any longer or tfl requests.
If you do need to authenticate then you can sign up for an API key at https://api-portal.tfl.gov.uk/signup
Create a JSON object similar to the one below

    var config = {};

    tfl = {
        appId: 'xxxxxxxx',
        appKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    };

    module.exports = config;


If you have put your credentials in a seperate file like above you can include them in your main JavaScript file the normal way
```
var credentials = require('../helpers/config');
```

Also don't forget to add the file with your API keys to .gitignore

[TFL]:https://api-portal.tfl.gov.uk/signup
[@lissy_sykes]:http://twitter.com/lissy_sykes
