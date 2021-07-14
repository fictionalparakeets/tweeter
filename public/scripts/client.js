/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1421113959088
  }
];


const createTweetElement = function(dataInput) {
  const { user, content, created_at } = dataInput;
  const $article = $("<article class=\"tweet-article\">");

  const html = `
  <header class="tweet-header">
    <img src="${user.avatars}">
    <div class="name-handle">
      <span>${user.name}</span>
      <span>${user.handle}</span>
    </div>
  </header>
    <h6 class="tweet-body">${content.text}</h6>
  <footer class="tweet-footer">
    <p>${timeago.format(created_at)}</p>
    <span>
      <i class="fas fas-footer fa-retweet"></i>
      <i class="fas fas-footer fa-flag"></i>
      <i class="fas fas-footer fa-heart"></i>
    </span>
  </footer>
  `
  return $article.html(html);
};


const renderTweets = function(arrayOfTweetObjects) {
  arrayOfTweetObjects.forEach(tweetObject => {
    const $tweet = createTweetElement(tweetObject);
    $('#tweets-container').append($tweet);
  })
};


$(document).ready(() => {
  console.log('load more tweets script is loaded');

  // const tweetData = '../initial_tweets'
  
  renderTweets(data);


  // AJAX POST request that sends the form data to the server.


  $( "#create-tweet" ).submit(function( event ) {
    event.preventDefault();
    // alert( "Handler for .submit() called." );

    const tweetText = $(event.target).serialize();

    let params = {
      tweetText,
      url: "/tweets",
      method: "POST"
    }
    console.log('is something happening');

    $.post('/tweets', tweetText);




    // $.ajax(params)
    // .then((results)=>{
    //   const tweet = renderTweets(params)
    //   data.append(results);
    // })
    // .catch((err)=>{
    //   console.log(`error trying to load more: ${err}`)
    // })

    

  });







})

