# Node TFL Journey Planner
> A simple Node wrapper for the for fetching real-time journey's from the TFL API


[![dependencies Status](https://david-dm.org/lissy93/node-tfl-journey-planner/status.svg)](https://david-dm.org/lissy93/node-tfl-journey-planner)
[![devDependencies Status](https://david-dm.org/lissy93/node-tfl-journey-planner/dev-status.svg)](https://david-dm.org/lissy93/node-tfl-journey-planner?type=dev)
[![npm](https://img.shields.io/npm/dy/localeval.svg)](https://www.npmjs.com/package/tfl-journey-planner)




## Install
```
npm install tfl-journey-planner --save
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


or with postal codes/ text addresses
```javascript
locations = {
  to: 'SE18 7PH',
  from: 'EC3M 3AD'
};
```

## Specifying additional options
The second param is a JSON object where you can put any of the following (all are optional):


| OPTION                  | DEFAULT     | EXPLINATION                                                                                                                                                               |
|-------------------------|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| via                     |             | Travel through (if in coordinate format then must be "longitude,latitude")                                                                                      |
| nationalSearch          | [False]     | Does the journey cover stops outside London? eg. "nationalSearch=true"                                                                                          |
| date                    |             | The date must be in yyyyMMdd format                                                                                                                             |
| time                    |             | The time must be in HHmm format                                                                                                                                 |
| timeIs                  | [Departing] | Does the time given relate to arrival or leaving time? Possible options: "departing" | "arriving"                                                               |
| journeyPreference       | [LeastTime] | The journey preference eg possible options: "leastinterchange" | "leasttime" | "leastwalking"                                                                   |
| mode                    |             | The mode must be a comma separated list of modes. eg possible options: "public-bus,overground,train,tube,coach,dlr,cablecar,tram,river,walking,cycle"           |
| accessibilityPreference |             | The accessibility preference must be a comma separated list eg. "noSolidStairs,noEscalators,noElevators,stepFreeToVehicle,stepFreeToPlatform"                   |
| fromName                |             | From name is the location name associated with a from coordinate                                                                                                |
| toName                  |             | To name is the label location associated with a to coordinate                                                                                                   |
| viaName                 |             | Via name is the location name associated with a via coordinate.                                                                                                 |
| maxTransferMinutes      |             | The max walking time in minutes for transfer eg. "120"                                                                                                          |
| maxWalkingMinutes       |             | The max walking time in minutes for journeys eg. "120"                                                                                                          |
| walkingSpeed            | [Average]   | The walking speed. eg possible options: "slow" | "average" | "fast".                                                                                            |
| cyclePreference         | [None]      | The cycle preference. eg possible options: "allTheWay" | "leaveAtStation" | "takeOnTransport" | "cycleHire"                                                     |
| adjustment              |             | Time adjustment command. eg possible options: "TripFirst" | "TripLast"                                                                                          |
| bikeProficiency         |             | A comma separated list of cycling proficiency levels. eg possible options: "easy,moderate,fast"                                                                 |
| alternativeCycle        | [False]     | Option to determine whether to return alternative cycling journey                                                                                               |
| alternativeWalking      | [True]      | Option to determine whether to return alternative walking journey                                                                                               |
| applyHtmlMarkup         | [False]     | Flag to determine whether certain text (e.g. walking instructions) should be output with HTML tags or not.                                                      |
| useMultiModalCall       | [False]     | A boolean to indicate whether or not to return 3 public transport journeys, a bus journey, a cycle hire journey, a personal cycle journey and a walking journey |
| walkingOptimization     | [False]     | A boolean to indicate whether to optimize journeys using walking                                                                                                |



Specify options like this:
```javascript
options = {
    walkingOptimization: true,
    bikeProficiency: 'easy',
    accessibilityPreference: 'noEscalators'
}
```



## Developing
Written in [LiveScript](http://livescript.net/), run `npm run build` to build, or `npm run watch` to watch for changes then build



## Unit Tests
`npm test`



## Issues
Report on [GitHub repo issue page](https://github.com/Lissy93/node-tfl-journey-planner/issues)





## Authenticating
Authentication is not required any longer or tfl requests.
If you do need to authenticate then you can sign up for an API key at https://api-portal.tfl.gov.uk/signup
Create a JSON object similar to the one below

```javascript
    tfl = {
        appId: 'xxxxxxxx',
        appKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    };
```

[TFL]:https://api-portal.tfl.gov.uk/signup
[@lissy_sykes]:http://twitter.com/lissy_sykes
