(function ($) {
    $(document).ready(function () {
        $('#pi-system .pi-zone-7 .owl-carousel').owlCarousel({
            margin: 3,
            nav: true,
            rtl: true,
            autoplay: true,
            dots: false,
            autoplayTimeout: 12000,
            autoplayHoverPause: true,
            navText: ['<i class="owl-prev fa fa-angle-left"></i>', '<i class="owl-next fa fa-angle-right"></i>'],
            responsive: {
                0: {items: 2},
                400: {items: 3},
                600: {items: 4},
                1000: {items: 5}
            }
        })
    });
    $(document).ready(function () {
        $('#pi-system .pi-zone-6 .owl-carousel').owlCarousel({
            margin: 3,
            nav: true,
            rtl: true,
            autoplay: true,
            dots: false,
            autoplayTimeout: 12000,
            autoplayHoverPause: true,
            navText: ['<i class="owl-prev fa fa-angle-left"></i>', '<i class="owl-next fa fa-angle-right"></i>'],
            responsive: {
                0: {items: 1},
                400: {items: 2},
                600: {items: 2},
                1000: {items: 3}
            }
        })
    });
    $(document).ready(function () {
        $('#pi-system .pi-zone-5 .owl-carousel').owlCarousel({
            margin: 3,
            nav: true,
            rtl: true,
            autoplay: true,
            dots: false,
            autoplayTimeout: 12000,
            autoplayHoverPause: true,
            navText: ['<i class="owl-prev fa fa-angle-left"></i>', '<i class="owl-next fa fa-angle-right"></i>'],
            responsive: {
                0: {items: 1},
                400: {items: 2},
                600: {items: 2},
                1000: {items: 3}
            }
        })
    });
    // Shwo hide form
    $(document).ready(function(){
        hidden = true;
        $('#show-submit').click(function(){
            if(hidden == false) {
                $('#order-more-info').slideUp('slow');
                $('#hide-submit').attr('id', 'show-submit').html('آخرین وضعیت مانده اقساط');
                hidden = true;
            } else {
                $('#order-more-info').slideDown('slow');
                $('#show-submit').attr('id', 'hide-submit').html('بستن پنجره');
                hidden = false;
            }
        });
    });
})(jQuery)