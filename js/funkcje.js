$(document).ready(function(){

    $(".imagNav a").on('click', function(){
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 'slow');
        return false; //zeby sie nie przeladowala strona po klinknieciu na li
    });

    $(".navList a").on('click', function(){
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 'slow');
        return false; //zeby sie nie przeladowala strona po klinknieciu na li
    });

});