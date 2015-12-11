/* jshint devel:true */
(function() {
  'use strict';
  $(document).ready(function($) {
    $('.figi-slider').slick({
      lazyLoad: 'ondemand',
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }, {
        breakpoint: 480,
        settings: {
          arrows: false
        }
      }]
    });
    $('a[href^="http"]').click(function(e) {
      e.preventDefault();
      var url = e.target.href ||  e.currentTarget.href;
      window.open(url);
    });
  });
})();