
$(document).ready(function() {

  const textInputField = $("#tweet-text");
  
  $(textInputField).on("input", function() {
    const currentLength = $(this).val().length;
    const lengthRemaining = 140 - currentLength;

    $('.counter').html(lengthRemaining);
    
    if (lengthRemaining < 0) {
      $('.counter').css("color", "red");
    } else {
      $('.counter').css("color", "");
    }
    
  });

});
