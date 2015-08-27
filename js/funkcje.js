$(document).ready(function(){


    function scrollViewport() {
        $(".imagNav a, .navList a").on('click', function(){
            var href = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(href).offset().top
            }, 'slow');
            return false; //zeby sie nie przeladowala strona po klinknieciu na li
        });
    }

    function showHoverOnGalleryImage() {
        $('.project').find('.img').mouseover(function(){
            $(this).prev('.hover').show();
        });
        $('.hover').mouseout(function(){
            $(this).hide();
        });
    }


    $('.hover').find('img').on('click', function () {
       console.log('klik');
    });

    //$('.hover').find('img').on('click', function(){
    //    console.log('klik');
    //    //$(this).addClass('bigPicture');
    //});


    scrollViewport();
    showHoverOnGalleryImage();
});