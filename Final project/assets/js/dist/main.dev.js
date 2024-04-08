"use strict";

// Lazy loading images
var lazyLoadInstance = new LazyLoad(); // Gamburger

document.getElementById('hamb--btn').addEventListener('click', function () {
  document.body.classList.toggle('open--mobile--menu');
});
document.getElementById('hamb--btn--mobile').addEventListener('click', function () {
  document.body.classList.toggle('open--mobile--menu');
});