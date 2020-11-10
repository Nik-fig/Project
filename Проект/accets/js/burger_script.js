jQuery(document).ready(function($){
$('.header_burger').on('click', function(e) {
  e.preventDefault;
  $('.header_burger,.dws_menu').toggleClass('active');
  $('body').toggleClass('lock');
});
});
