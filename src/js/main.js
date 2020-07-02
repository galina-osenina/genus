//= ../../node_modules/@fortawesome/fontawesome-free/js/all.js
//= ../../node_modules/jquery/dist/jquery.min.js

$(function() {


    $('.header__nav-list').find('.nav-list__link').each(function() {
        $(this).toggleClass('nav-list__link_active', $(this).attr('href') == window.location.pathname);
    });

  $('.menu-button').on('click', function () {
    $(this).toggleClass('menu-button_open');
    $('.header__nav').toggleClass('header__nav_visible');
    $('body').toggleClass('body_fixed');
  });

  $('.js-form-control').on('change focus', function(){
    $(this).parent().find('.form__placeholder').addClass('form__placeholder--active');
  });

  $('.js-form-control').on('blur', function(){
    if (!$(this).val()){
      $(this).parent().find('.form__placeholder').removeClass('form__placeholder--active');
    }
  });

  $('.js-contact-btn').on('click', function (e) {
      var _target = $('.js-form-contact');

      if( _target.length ) {
          e.preventDefault();

          if ($('.header__nav_visible').length) {
              $('.menu-button').toggleClass('menu-button_open');
              $('.header__nav').toggleClass('header__nav_visible');
              $('body').toggleClass('body_fixed');
          }

          $('html, body').animate({
              scrollTop: _target.offset().top
          }, 500);
      }
  });

});
