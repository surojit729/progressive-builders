jQuery(document).ready(function ($) {
    // sticky_header
    $(function () {
        var shrinkHeader = 2;
        $(window).scroll(function () {
            var scroll = getCurrentScroll();
            if (scroll >= shrinkHeader) {
                $('header').addClass('sticky');
            } else {
                $('header').removeClass('sticky');
            }
        });

        function getCurrentScroll() { return window.pageYOffset || document.documentElement.scrollTop; }
    });

    // Responsive_navigation
    $(".menu_btn").click(function () {
        $("body").toggleClass("mobile_menu_active");
        $(".overlay").click(function () {
            $("body").removeClass("mobile_menu_active");
        })
    });

    // Sub_menu
    $(".hdr_menu ul li.menu-item-has-children > a").after("<div class='sub_menu_opener'><i class='las la-angle-down'></i></div>");
    $(".sub_menu_opener").click(function () {
        $('.hdr_menu .sub-menu').slideUp();
        $("body").removeClass("sub_menu_active");
        if ($(this).parent().find(".sub-menu").css('display') == 'none') {
            $(this).parent().find(".sub-menu").slideDown();
            $("body").addClass("sub_menu_active");
        } else {
            $(this).parent().find(".sub-menu").slideUp();
            $("body").removeClass("sub_menu_active");
        }
    });

    $(".sub_menu_opener").click(function () {
        if ($(this).parents(".hdr_menu ul > li").hasClass('sub_menu_open')) {
            $(this).parents(".hdr_menu ul > li").removeClass('sub_menu_open');
        } else {
            $('.hdr_menu ul > li').removeClass("sub_menu_open");
            $(this).parents(".hdr_menu ul > li").addClass("sub_menu_open");
        }
    });

    // Scroll_top_top
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $(".scrollup").addClass("active");
        } else {
            $(".scrollup").removeClass("active");
        }
    });

    $(".scrollup").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });



    // Project Slider
    new Swiper('.projectSliderOuter .swiper', {
        paginationClickable: true,
        loop: true,
        spaceBetween: 50,
        slideToClickedSlide: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: '.projectSliderOuter .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: ".projectSliderOuter .swiper-button-next",
            prevEl: ".projectSliderOuter .swiper-button-prev",
        },
        breakpoints: {
            318: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 4,
            },
        },
    });

});
