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
    scrollViewport();
    showHoverOnGalleryImage();
});


    //function validateForm (){
    //    var x = document.forms["message"]["imie"].value;
    //    if (x == null || x ==""){
    //        alert("Name must be filled out");
    //        return false;
    //    }
    //}






    //var greypercentege = $('.grey').width();
    //var PinkpercentegeArray = [];
    //
    //for (var k=0; k < $('.boxes').children().length ; k++){
    //    var percentageText = parseInt($(".percentage"+(k+1)).text(),10);
    //    PinkpercentegeArray.push( (percentageText + "%"));
    //}
    //console.log(PinkpercentegeArray);
    //
    //for (var i=0; i < $('.boxes').children().length; i++) {
    //    $('.boxes').find('.pinkFirst').eq(i).animate({
    //        width: PinkpercentegeArray[i]
    //    });
    //}


