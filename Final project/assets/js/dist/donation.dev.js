"use strict";

// Tabs
$(function () {
  $(".tabs--buttons button").on('click', function () {
    if (!$(this).hasClass('active')) {
      $(".tabs--buttons button.active").removeClass('active');
      $(this).addClass('active');
      var tabId = $(this).data('tab');
      $(".tab.active").removeClass('active');
      $("#".concat(tabId)).addClass('active');
    }
  });
});