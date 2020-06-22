// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
  $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
  $("#myCarousel").carousel("prev");
});

// https://www.w3schools.com/bootstrap/bootstrap_ref_js_carousel.asp
// https://gist.github.com/rxaviers/7360908
// https://css-tricks.com/simple-swipe-with-vanilla-javascript/
// https://www.w3schools.com/howto/howto_js_slideshow.asp
// https://codepen.io/Schepp/pen/WNbQByE
