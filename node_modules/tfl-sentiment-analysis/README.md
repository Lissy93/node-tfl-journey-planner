# TFL Twitter Sentiment Analysis
A node modules that analyses recent Twitter feeds mentioning each London Underground line, and than uses HP IDOL OnDemand Sentiment Analysis to determine wheather overall each line is receiving positive or negetive tweets.



##Usage
###Inatall
```
npm install git://github.com/Lissy93/london-underground-live-sentiment-analysis.git
```

### Include 
```
var tflSentimentAnalysis = require('tfl-sentiment-analysis');
```

### Authenticating
You will need to sign up for an API key at https://api-portal.tfl.gov.uk/signup, and also the HP OnDemand key at http://www.idolondemand.com/signup.html , both of which are free.
Create a JSON similar to this:
```
exports.HP_API_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

exports.TWITTER_API = {
    CONSUMER_KEY        : "xxxxxxxxxxxxxxxxxxxxxxxxx",
    CONSUMER_SECRET     : "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    ACCESS_TOKEN_KEY    : "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    ACCESS_TOKEN_SECRET : "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
};

```
You should put it in a seperate file along with your other API keys and add file to your .gitignore

### Make simple request
```javascript
tflSentimentAnalysis.fetchTflSentiments(function(results){
    console.log(results); // Do whatever with the results
});
```

### Example Output
```
[ { line: 'DLR', sentiments: 'neutral', score: 0 },
  { line: 'WaterlooCity', sentiments: 'neutral', score: 0 },
  { line: 'Victoria',
    sentiments: 'positive',
    score: 0.5685799620527161 },
  { line: 'Picadilly', sentiments: 'neutral', score: 0 },
  { line: 'Bakerloo', sentiments: 'neutral', score: 0 },
  { line: 'Central', sentiments: 'neutral', score: 0 },
  { line: 'Overground', sentiments: 'neutral', score: 0 },
  { line: 'Jubile', sentiments: 'neutral', score: 0 },
  { line: 'District',
    sentiments: 'negative',
    score: -0.8177321332492695 },
  { line: 'Metropolitan', sentiments: 'neutral', score: 0 },
  { line: 'Northen', sentiments: 'positive', score: 0.48272937292926293 },
  { line: 'Hammersmith', sentiments: 'neutral', score: 0 },
  { line: 'Circle',
    sentiments: 'negative',
    score: -0.44023113875144726 } ]
```

[TFL]:https://api-portal.tfl.gov.uk/signup
[@lissy_sykes]:http://twitter.com/lissy_sykes

