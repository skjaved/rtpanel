$("#singleImage").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

$("#multiImage").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 5
    }
  }
});

var owl1 = $(".slider2");
owl1.owlCarousel();
// Go to the next item
$(".next").click(function() {
  owl1.trigger("next.owl.carousel", [700]);
});
// Go to the previous item
$(".prev").click(function() {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl1.trigger("prev.owl.carousel", [700]);
});

$("#slider3").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 5
    }
  }
});

var owl = $(".slider3");
owl.owlCarousel();
// Go to the next item
$(".next3").click(function() {
  owl.trigger("next.owl.carousel", [700]);
});
// Go to the previous item
$(".prev3").click(function() {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger("prev.owl.carousel", [700]);
});

// Slicknav liabrary is used for responsive menu

$(function() {
  $("#resmenu").slicknav();
});
