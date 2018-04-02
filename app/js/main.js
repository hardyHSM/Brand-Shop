(function($) {
    var searchSelect = $('.search__select');
    searchSelect.on('click', function(event) {
        var context = $(this);
        var searchSelectDrop = $(this).find('.search__drop-down');
        event.stopPropagation();
        if(searchSelect.has(event.target).length === 0) {
           searchSelectDrop.toggleClass("search__drop-down_active");
        } else {
            return false;
        }
        $(document).on('click',  function (e) {
            var parentElem = e.target.offsetParent;
            $(this).off('click');
            if(!searchSelectDrop.is(e.target) && searchSelectDrop.has(e.target).length === 0) {
                searchSelectDrop.removeClass("search__drop-down_active");
            }
        })
    });

    $('.search__drop-down .drop-down__item').on('click', function () {
        var dropItemText = $(this).text().replace(/^\s+|\s+(?=[\n\r])/gm,"");
        var searchInput = $(this).closest('.search').find('.search__input');
        searchInput.val(dropItemText);
    });
    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: false,
        dots: true,
        arrows: false
    });
    $('.slider-product__js-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: false,
        dots: false,
        prevArrow: ".slider-product__button_prev",
        nextArrow: ".slider-product__button_next",
    });
    
})(jQuery);


$(document).scroll(function(e) {
    if ($(this).scrollTop() > 1050) {
        $('.featured-products .product-card').addClass('product-card_animated');
    }
});


(function($) {
    var accordionHeader = $('.filter-block__header');
    accordionHeader.on('click', function () {
        $(this).toggleClass('filter-block__header_active');
        var accordionBody = $(this).next(".filter-block__list");
        accordionBody.slideToggle(400);
    });


})(jQuery);


(function($) {
    var sortDisplay = $('.sort-display__item');

    sortDisplay.on('click', function (e) {
        var sortDisplayType = $(this).data('display');
        var products = $('.product-card');
        sortDisplay.each(function (i) {
            products.removeClass('product-card_' + $(this).data('display'));
        });
        
        sortDisplay.removeClass('sort-display__item_active');
        $(this).addClass('sort-display__item_active');
        products.addClass('product-card_move');
        products.addClass('product-card_' + sortDisplayType );
        setTimeout(function () {
            products.removeClass('product-card_move');
        }, 3000);


    })


})(jQuery);

(function($) {
    var footerTab = $('.main-footer__title');

    footerTab.on('click', function () {
       $(this).next().slideToggle(600);
    });
})(jQuery);



(function($) {

    var menuBurger = $('.button-menu');

    menuBurger.on('click', function () {
        $(this).toggleClass('button-menu_active');
    })

})(jQuery);




function TabsMenu () {
    var tabsMenu = $('.main-nav__item_drop');
    $('.main-nav__drop-down').css('display', '');

    if ($(window).width() < 777) {


        tabsMenu.removeClass('main-nav__item_active');
        tabsMenu.on('click', function clickOnTabMenu () {
            if($(this).find('.main-nav__drop-down').css("display") == "block") {
                return false;
            }
            tabsMenu.not($(this)).removeClass('main-nav__item_active');
            $(this).toggleClass('main-nav__item_active');
            tabsMenu.find('.main-nav__drop-down').not($(this).find('.main-nav__drop-down')).slideUp(500);
            $(this).find('.main-nav__drop-down').slideDown(500);
        });
        // $('.main-nav__item').addClass('main-nav__item_drop');
    } else {
        tabsMenu.off('click');
        tabsMenu.removeClass('main-nav__item_active');
        // $('.main-nav__item').removeClass('main-nav__item_drop');
    }

};


$(window).on('resize', function () {
    TabsMenu();
});
$(document).ready(function () {
        TabsMenu();
});



(function($) {
    // MENU LEFT SIDE

    var buttonMenu = $('.button-menu');
    var sideMenuBar = $('.page__wrapper-nav');

    buttonMenu.on('click', function() {
        sideMenuBar.toggleClass('page__wrapper-nav_active')
    })


})(jQuery);



// function initSlick() {
//     var width = $(window).width();
//     if (width > 778) {
//         $('.advantages_row .advantages__list').slick('unslick');
//     }
//     if (width < 778) {
//         $('.advantages_row .advantages__list').slick({
//             dots: true,
//             infinite: false,
//             speed: 300,
//             slidesToShow: 1,
//             slidesToScroll: 1
//         });
//     }
// }
//







