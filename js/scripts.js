// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


$(document).ready(function(){

  //Contact form submit button
  $('#subMesg').on('click', function(){
    console.log('clicked');
    var comment = $('.message-box').val();
    $('#visiable-comment').html(comment);
    $('.message-box').hide("fast", function(){
      alert("We have received your message! Thank you.")
    });

    return false;
  });

  // Tooltips
  $(function(){
        $('#[item1]').tooltip();
        $('[data-toggle="tooltip"]').tooltip();
      });

  // Stellar
  $.stellar();

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

  //textarea background
  //$(".message-box").css("border", "2px solid red");

});