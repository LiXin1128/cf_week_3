// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


$(document).ready(function(){
  // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });

  // Stellar
  $.stellar();

  // Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  //textarea background
  $(".message-box").css("border", "2px solid red");

  $('#button').on('click', function() {
    var comment = $('.message-box').val();
    //console.log(comment);
    $('#visible-comment').html(comment);
    $('.message-box').hide("fast");
    $('.name').hide("fast");
    $('.email').hide("fast");
    $('.company').hide("fast");
    $('.phone').hide("fast");

    return false;
  });

  $('.message-box').on("keyup", function(){
    //console.log("keyup happened"); //here we make sure we're catching the keyup
    var charCount = $(".message-box").val().length; //here we set the length of the content of the textarea to a variable
    console.log(charCount);
    $("#char-count").html(charCount);//here we show a running character count to the user
  
    if(charCount > 50){
          $("#char-count").css("color", "red");
    }else{
          $("#char-count").css("color", "black");
    };

  })


});//document ready END