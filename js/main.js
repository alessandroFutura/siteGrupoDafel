(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        //console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });

    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            }
        }
    });

    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: false,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        loop: true,
    });

    function Configs (){
        if($(window).width() < 500){
            $('#my_slide').removeClass('myslide');
            $('#gallery').css("display", "none"); 
            $('#group_galery').css("margin-bottom", "0px");
            $('#image_page_product').css("height", "235px");
            $('#video_dafel').addClass('mobile_video');
            $('.navbar').addClass('NavBarMobile');
            $('#icon_navbar').addClass('btnColorIcon');
            $('.nav-item').addClass('menuMobile');
            $('#video_company').addClass('videoCompany');
            $('#myFooter').removeClass('row');
            
        }else{
            $('#my_slide').addClass('myslide');
            $('#gallery').css("display", "flex"); 
            $('#group_galery').css("margin-bottom", "35rem");
            $('#image_page_product').css("height", "500px");
            $('#video_dafel').removeClass('mobile_video');
            $('.navbar').removeClass('NavBarMobile');
            $('#icon_navbar').removeClass('btnColorIcon');
            $('.nav-item').removeClass('menuMobile');
            $('#video_company').removeClass('videoCompany');
            $('#myFooter').addClass('row');
        }
    }


    (function () {
        let js = document.createElement('script');
        js.type = 'text/javascript';
        js.async = 1;
        js.src = 'https://go.botmaker.com/rest/webchat/p/57W6XZ6P34/init.js';
        document.body.appendChild(js);
    })();
    (function () {
        Configs();
    })();
    
    $( window ).resize(function() {
        Configs();
    });

})(jQuery);

