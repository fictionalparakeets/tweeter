//


$(document).ready(function() {

  const textInputField = $("#tweet-text");
  
  $(textInputField).on("input", function() {
    const currentLength = $(this).val().length;
    const lengthRemaining = 140 - currentLength;

    // Bad practice. To be changed to accessing it via traversing the dom
    $('.counter').html(lengthRemaining);
  });

});





