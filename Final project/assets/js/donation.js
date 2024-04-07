// Tab
$(function(){
    $(".tabs--buttons button").on('click', function(){
        if(!$(this).hasClass('active')){
            $(".tabs--buttons button.active").removeClass('active')
            $(this).addClass('active')
            const tabId = $(this).data('tab')
            $(".tab.active").removeClass('active')
            $(`#${tabId}`).addClass('active')
        }
    })
});