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

// Animate skill progress bars when in viewport
function animateSkillBars() {
  $('.progress-bar').each(function() {
    var bar = $(this);
    var percent = bar.data('progress');
    var color = bar.data('color');
    if (bar.visible(true) && !bar.hasClass('animated')) {
      bar.css({
        width: percent + '%',
        background: color
      }).addClass('animated');
    }
  });
}

// jQuery plugin to check if element is visible
$.fn.visible = function(partial) {
  var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;
  return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
};

$(window).on('scroll resize', animateSkillBars);
$(document).ready(animateSkillBars);

$('.skill-progress-item').each(function() {
  var color = $(this).find('.progress-bar').data('color');
  $(this).find('.skill-label i').css('color', color);
});