$('.nav-toggle-open-wrapper, .nav-toggle-close-wrapper').on('click', function() {
  $('.toggled-nav-wrapper').toggleClass('open');
  $('body').toggleClass('toggle');
  $('.nav-toggle-body-overlay').toggleClass('toggle');
});
