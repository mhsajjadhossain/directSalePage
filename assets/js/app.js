





function mainSlider() {
  var BasicSlider = $('.content_slide_wrap');
  BasicSlider.on('init', function(e, slick) {
      var $firstAnimatingElements = $('.single_content_slide:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);
  });
  BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('.single_content_slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
  });
  BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: false,
      fade: true,
      arrows: false,
      asNavFor: '.hero_slider_wrap',
      responsive: [
          { breakpoint: 767, settings: { dots: false, arrows: false } }
      ]
  });

  function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function() {
          var $this = $(this);
          var $animationDelay = $this.data('delay');
          var $animationType = 'animated ' + $this.data('animation');
          $this.css({
              'animation-delay': $animationDelay,
              '-webkit-animation-delay': $animationDelay
          });
          $this.addClass($animationType).one(animationEndEvents, function() {
              $this.removeClass($animationType);
          });
      });
  }



  $('.hero_slider_wrap').slick({
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    centerPadding: 0,
    infinite:true,
    asNavFor: '.content_slide_wrap',
    nextArrow: '.nxt_arrow_btn',
    prevArrow: '.prev_arrow_btn',
    responsive: [
      { breakpoint: 576, settings: { 
        slidesToShow: 1

       } }
  ]
  });

}
mainSlider();
  
// On before slide change


//       console.log(slidArr.indexOf(slide)+1);


// client_testimonial
// testimonial slide
$('.paicc_test_nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: 0,
  arrows:false,
  asNavFor: '.paicc_client_slide',
  autoplay:true
});
$('.paicc_client_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: 0,
  arrows:false,
  fade:true,
  asNavFor: '.paicc_test_nav'
});
// venobox activation
$('.venobox').venobox(); 


// scroll js 
  const slider = document.querySelector(".image_wraper");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", e => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
  });