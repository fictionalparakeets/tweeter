/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

  const createTweetElement = function(dataInput) {
    const { user, content, created_at } = dataInput;
    const $article = $("<article class=\"tweet-article\">");
    const escape = function (str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };
  
    const html = `
    <header class="tweet-header">
      <img src="${user.avatars}">
      <div class="name-handle">
        <span>${user.name}</span>
        <span>${user.handle}</span>
      </div>
    </header>
      <h6 class="tweet-body">${escape(content.text)}</h6>
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
      $('#tweets-container').prepend($tweet);
    })
  };

  const loadTweets = function() {
    // loaded from http://localhost:8080/tweets

    $.ajax('/tweets', { method: 'GET' })
      .then(function (tweets) {
        renderTweets(tweets);
      });
  };

  loadTweets();


  const loadLastTweet = function() {
    $.ajax('/tweets', { method: 'GET' })
      .then(function (tweets) {
        const lastTweet = tweets.length - 1;
        renderTweets([tweets[lastTweet]]);
    });
  };


  // AJAX POST request that sends the form data to the server.
  $( "#create-tweet" ).submit(function( event ) {
    event.preventDefault();
    $('#tweet-error').html("");

    const tweetText = $(event.target).serialize();
    // console.log(tweetText);

    if (tweetText === "text=") {

      $('#tweet-error').html("You can't tweet nothing!");

      // $('#tweet-error').slideDown( 50000, function() {
      //   // Animation complete.
      // });

    } else if (tweetText.length > 140) {

      $('#tweet-error').html("Respect the limitations please!");

      // $('#tweet-error').slideDown( 900, function() {
      //   // Animation complete.
      // });

    } else {
      $.post('/tweets', tweetText);

      $.ajax('/tweets', { method: 'GET' })
        .then(loadLastTweet());

    }
    
  });

})

