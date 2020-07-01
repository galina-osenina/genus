//= ../../node_modules/@fortawesome/fontawesome-free/js/all.js
//= ../../node_modules/jquery/dist/jquery.min.js

$(function() {
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
});
