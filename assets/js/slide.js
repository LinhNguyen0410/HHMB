document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-slider', {
    'cover'      : true,
    'heightRatio': 0.5,
    type: "fade",
    pagination: false,
    autoplay: true,
    fixedHeight:350
  } ).mount();
} );