
request = require 'request'
querystring = require 'querystring'


module.exports = (lo, options, cb) ->

  # Base URL
  url =  "https://api.tfl.gov.uk/Journey/JourneyResults"

  # Add start location (either string, or object {lat: '', lng: ''}) to URL
  if typeof lo.from is 'string' then url += "/#{lo.from}"
  else if typeof lo.from is 'object' then url +="/#{lo.from.lat},#{lo.from.lng}"

  # Add end location (either string, or object {lat: '', lng: ''}) to URL
  if typeof lo.to is 'string' then url += "/to/#{lo.to}"
  else if typeof lo.to is 'object' then url += "/to/#{lo.to.lat},#{lo.to.lng}"

  # Add optional tfl option paramaters onto URL
  url += "?#{querystring.stringify options}"

  # Make the request
  request {url: url, json: true}, (error, response, body) ->
    if !error and response.statusCode == 200 then cb body # Everythings cool
    else console.log "ERROR"; cb {} # Stuff isn't so cool, tfl is stupid
