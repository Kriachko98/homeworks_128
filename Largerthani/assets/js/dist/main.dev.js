"use strict";

// Lazy loading images
var lazyLoadInstance = new LazyLoad(); // Gamburger

document.getElementById('hamb--btn').addEventListener('click', function () {
  document.body.classList.toggle('open--mobile--menu');
});
document.getElementById('hamb--btn--mobile').addEventListener('click', function () {
  document.body.classList.toggle('open--mobile--menu');
}); // Video
// document.addEventListener('DOMContentLoaded', function() {
//     const videoLink = document.querySelector('.about--video--content .video');
//     videoLink.addEventListener('click', function(event) {
//         event.preventDefault();
//         const videoContainer = document.createElement('div');
//         videoContainer.classList.add('video-container');
//         videoContainer.innerHTML = `
//             <div class="video-responsive">
//             <iframe width="560" height="315" src="https://www.youtube.com/embed/3VMz06iVzqs?si=bpLP8CbA6kSiOgnq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                
//             </div>
//         `;
//             // Додати контейнер в кінець body
//             document.body.appendChild(videoContainer);
//         });
//     });