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

    $('.project').find('.img').mouseover(function(){
        $(this).prev().show();
    });
    $('.project').find('.img').mouseout(function(){
        $('.hover').hide();
    });

    $('.hover').find('img').on('click', function () {
       console.log('klik');
    });

    //$('.hover').find('img').on('click', function(){
    //    console.log('klik');
    //    //$(this).addClass('bigPicture');
    //});
});