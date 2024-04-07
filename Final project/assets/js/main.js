// Supporters slider
$(function(){
    $("#supportersSlider").lightSlider({
        item: 6,
        slideMargin: 70,
        auto: true,
        loop: true,
        pause: 3000,
        controls: false,
    })
});

// Burger menu
// $(document).ready(function(){
//     $('.burger-btn').click(function(){
//       $('.menu').slideToggle();
//     });
// });

{/* <script> */}
        document.getElementById('hamb--btn').addEventListener('click', function(){
            document.body.classList.toggle('open--mobile--menu')
        })

        document.getElementById('hamb--btn--mobile').addEventListener('click', function(){
            document.body.classList.toggle('open--mobile--menu')
        })
    // </script>