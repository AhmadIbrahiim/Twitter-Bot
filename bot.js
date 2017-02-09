
// Dependencies =========================
var twit = require('twit'),
config = require('./config');

var Twitter = new twit(config);

// RETWEET BOT ==========================
// find latest tweet according the query 'q' in params
var followAndFollowBack = function() {
    var params = {
        q: 'انا',
		result_type: 'recent'

    }
    Twitter.get('search/tweets', params, function(err, data) {
      // if there no errors
        if (!err) {

          // grab ID of tweet to retweet
           var USerIdToFollow=data.statuses[0].user.id;
           var tweetid=data.statuses[0].id;
           var screen_name=data.statuses[0].user.screen_name;
          console.log("User ID is "+data.statuses[0].user.id);
        }
        else{
          console.log("ErroR !");
        }
		//var Repy = ['You know ! i like your tweets so i followed you 😀','indeed! you deservce to be followed 😀','Oh No ! I ve Followed you 🤔,','Do you know why i followed you ?','I do not think that !','Thats Awesome, i think i have to follow you ! ' ,' I like it'];
    //var userid=data.statuses[0].userid;

          Twitter.post('friendships/create', { id: USerIdToFollow}, function(err)
            {
            if(!err)
              console.log("Done")
            else{
              console.log("ErroR");
            }

          });
              //{
             //   Twitter.post('statuses/update', {in_reply_to_status_id: tweetid, status: 
           //       Repy[Math.floor(Math.random()*(6-0+1)+0)]+  ' @' + screen_name}, 
         // function(err, data, response) {
           // if(!err){
                //console.log("Name Has been followed");
                  //}
                 // else{
                 //   console.log(err);
               //   }
             // });
          

            }); 

}



// grab & retweet as soon as program is running...
followAndFollowBack();
// retweet in every 50 minutes
setInterval(followAndFollowBack, 1000000);
// FAVORITE BOT====================

// find a random tweet and 'favorite' it

// function to generate a random tweet tweet
		