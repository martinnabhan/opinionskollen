/* disable scrolling */
function toggleScroll() {
  $('body').on('mousewheel', function(e) {
    if ($('body').hasClass('noscroll')) {
      e.preventDefault();
    }
  });
  /* for firefox */
  $('body').on('DOMMouseScroll', function(e) {
    if ($('body').hasClass('noscroll')) {
      e.preventDefault();
    }
  });
  /* for touch devices */
  $('body').on('touchmove', function(e) {
    if ($('body').hasClass('noscroll')) {
      e.preventDefault();
    }
  });
}

/* hamburger menu animation */
function toggleNav() {
  toggleScroll();
  $(".hamburger").toggleClass("is-active");
  $(".nav").fadeToggle(400);
  $("body").toggleClass("noscroll");
}

$(document).ready(function() {
  /* hamburger menu trigger */
  $(".hamburger").click(toggleNav);
});

/* make esc exit hamburger menu */
$(document).keydown(function(e) {
  if (e.keyCode == 27) {
    if ($(".hamburger").hasClass("is-active")) {
      toggleNav();
    }
  }
});
