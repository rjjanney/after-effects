// Dependencies
var twit = require('twit'), config = require('./config');
var Twitter = new twit(config);

var retweet = function() {
    var params = {
        q: 'kamandi OR omac',
        result_type: 'recent'
    }
    Twitter.get('search/tweets', params, function(err, data) {
        // if there are no errors
        if (!err) {
            // grab ID of tweet to retweet
            var retweetId = data.statuses[0].id_str;
            // Tell Twitter to retweet
            Twitter.post('statuses/retweet/:id', 
            {
                id: retweetId
            },
            function(err, response) {
                if (response) {
                    console.log('Retweeted!!!');                    
                }
                if (err) {
                    console.log('Error tweeting');
                }
            }
            );
        }
        // if unable to Search a tweet
        else {
            console.log('Error searching');
        }
    });
}

retweet();
// retweet every 3 minutes
setInterval(retweet, 180000);