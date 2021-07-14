/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {
  console.log('load more tweets script is loaded');

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


  const loadTweets = function() {
    // loaded from http://localhost:8080/tweets

    $(function() {
      const $button = $('#load-more-posts');
      $button.on('click', function () {
        console.log('Button clicked, performing ajax call...');

        $.ajax('/tweets', { method: 'GET' })
        .then(function (tweets) {
          renderTweets(tweets);
          $button.replaceWith(tweets);
        });
      });
    });
  };

  // const tweetData = '../initial_tweets'
  
  // renderTweets(data);
  loadTweets();

  // AJAX POST request that sends the form data to the server.

  $( "#create-tweet" ).submit(function( event ) {
    event.preventDefault();
    // alert( "Handler for .submit() called." );

    const tweetText = $(event.target).serialize();

    $.post('/tweets', tweetText);
 
  });

})
