$(document).ready(function(){
    $('.image-slider').slick(
        {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 5000,
            draggable: true,
            prevArrow:"<button type='button' class='slick-prev pull-left po_left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
        }
    );
});

$(document).ready(function(){
    $('.content-slider').slick(
        {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
        });
});

// backtop