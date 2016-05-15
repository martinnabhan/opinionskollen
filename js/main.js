/* disable scrolling */
function toggleScroll() {
  console.log("Stopping scrolling");

  $('body').on('mousewheel', function(e) {
    if ($('body').hasClass('noscroll')) {
      e.preventDefault();
    }
  });
}

/* hamburger menu animation */
$(document).ready(function() {
  toggleScroll();
  $(".hamburger").click(function() {
    $(".nav").fadeToggle(400);
    $("body").toggleClass("noscroll");
  });
});

/* make esc exit hamburger menu */
$(document).keydown(function(e) {
  if (e.keyCode == 27) {
    $(".nav").fadeOut(500);
    $("body").removeClass("noscroll");
  }
});