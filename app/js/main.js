$(document).ready(function() {

  $(window).on("load resize", function(e) {
    if ($(window).width() > 800) {
      var h = $('.header').height(),
        w = $(window).height(),
        v = w - h;
      $(".headerIntro.top").css({
        "height": v
      })
    } else {
      $(".headerIntro.top").css({
        "height": "auto"
      })
    }
  });

});
