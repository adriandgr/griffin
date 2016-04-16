$(document).ready(function(){
  $('.slick-01').slick({
  		lazyLoad: 'ondemand',
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 5,
		adaptiveHeight: true,


		responsive: [
		{
		  breakpoint: 1225,
		  settings: {
		    slidesToShow: 4,
		    slidesToScroll: 4,
		    infinite: false,
		    dots: false
		  }
		},
		{
		  breakpoint: 1024,
		  settings: {
		    slidesToShow: 3,
		    slidesToScroll: 3,
		    infinite: false,
		    dots: false
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
		]
  });
});
