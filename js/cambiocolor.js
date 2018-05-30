$(window).scroll(function() {
  if ($("#home").offset().top > 300) {
      $("#home").addClass("bg-dark");
  } else {
      $("#home").removeClass("bg-dark");
  }
});
