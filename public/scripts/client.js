/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(() => {
  console.log('load more tweets script is loaded');

  // const $tweet = $(`<article class="tweet">Hello world</article>`);

  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  }


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
      <p>${created_at}</p>
      <span>
        <i class="fas fas-footer fa-retweet"></i>
        <i class="fas fas-footer fa-flag"></i>
        <i class="fas fas-footer fa-heart"></i>
      </span>
    </footer>
    `
    return $article.html(html);
  }

  const $tweet = createTweetElement(tweetData);
  const $tweet2 = createTweetElement(tweetData);
  const $tweet3 = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet);
  $('#tweets-container').append($tweet2);
  $('#tweets-container').append($tweet3);
  // to add it to the page so we can make sure it's got all the right elements, classes, etc




})
