$(document).ready(function() {
  $('.project-gallery').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
    mainClass: 'mfp-slide-horizontal',
    removalDelay: 300,
    callbacks: {
      change: function() {
        var self = this;
        var $content = this.content;
        // Remove and re-add the animation class to trigger the transition
        $content.removeClass('mfp-content-animate');
        setTimeout(function() {
          $content.addClass('mfp-content-animate');
        }, 10);
      }
    }
  });
});

$('.testimonial-9-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $('.testimonial-nav.prev'),
  nextArrow: $('.testimonial-nav.next'),
  dots: true, // Optional: show dots navigation
  adaptiveHeight: true // Optional: adjust height to content
});

window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav.navigation');
  if (window.scrollY > 40) {
    nav.classList.add('navbar-fixed');
  } else {
    nav.classList.remove('navbar-fixed');
  }
});