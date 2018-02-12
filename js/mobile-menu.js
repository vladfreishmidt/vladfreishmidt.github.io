//THIS SCRIPT MAKES MOBILE MENU STICKY ON 100vh SCROLL
$(function() {
    $(window).scroll (
      function() {
        if( $(this).scrollTop() > $(window).height() ) {
          $('.mobile-nav').addClass('sticky');
        } else {
          $('.mobile-nav').removeClass('sticky');
        }
      }
    );
});

$(document).ready(function() {

  $('.btn-mobile-nav').on('click', function() {
    $('.mobile-nav-list').toggleClass('open');  
  });
});
