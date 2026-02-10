"use strict";

// Supporters slider
$(function () {
  $("#supportersSlider").lightSlider({
    item: 6,
    slideMargin: 70,
    auto: true,
    loop: true,
    pause: 3000,
    controls: false,
    responsive: [{
      breakpoint: 1245,
      settings: {
        slideMargin: 70,
        item: 5
      }
    }, {
      breakpoint: 1060,
      settings: {
        slideMargin: 70,
        item: 4
      }
    }, {
      breakpoint: 835,
      settings: {
        slideMargin: 40,
        item: 3
      }
    }, {
      breakpoint: 545,
      settings: {
        slideMargin: 10,
        item: 2
      }
    }]
  });
});