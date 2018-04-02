$(document).ready(function() {
   var overlay = $('.overlay');
   var popUp = $('.overlay__pop-up');
    
    
   function popUpInit () {
       $('.button_open-cart').on('click', function () {
           overlay.addClass('overlay_active');
           $('.overlay__pop-up[data-type=product]').addClass('overlay__pop-up_active');
       });
       $('.overlay__button').on('click', function () {
           popUp.removeClass('overlay__pop-up_active');
           overlay.removeClass('overlay_active');
       })
   }
   popUpInit();
});
