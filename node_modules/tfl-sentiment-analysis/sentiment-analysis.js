/**
 * Created by Alicia on 21/06/2015.
 */

var request = require('request');

var host = 'https://api.idolondemand.com/1/api/sync/analyzesentiment/v1';

function fetchRoutes(text_body, api_key, callback) {

    var url = host +'?text=' + text_body +'&apikey=' + api_key;

    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            callback(body);
        }
    });
}

exports.fetchRoutes = fetchRoutes;