
$(document).ready(function(){

	affixSelector();
	scrollSpy();
	homeScroll();
	photo_popup();
});


function affixSelector(){

	var width=$(window).width();

	if(width<=767){
		affixNavPhone();

	} else if(width>767){
		affixNavPc();

	}

}
setInterval(affixSelector, 5000);

function affixNavPc(){
		$('.nav_container').affix({
      offset: {
        top: $(window).height() * 0.70
      }
		});
};

function affixNavPhone(){
		$('.nav_container').affix({
      offset: {
        top: $(window).height() * 1.0
      }
		});
		$('.nav li a[href="#exercices"]').text('Exerc.');

};

function scrollSpy (){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".nav_container", offset: 400});

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 300, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;


    });


  });
};

function homeScroll(){

$(".nav_top").on("click",function(){

	$('html, body').animate({
      scrollTop: $("#profile").offset().top
    }, 500);

	});
};

function photo_popup(){
$(".photo_grid_item img").on('click', function() {

	alt="";
	alt=$(this).attr('alt');
	$('.photo_back').removeClass("hide");
	$('.photo_back img[alt='+alt+']').removeClass("hide");
	$('.photo_back img[alt='+alt+']').addClass("see_it");
	$('.photo_back').addClass("see_it");


});
$(".photo_back").on('click', function() {

	$('.photo_back').addClass("hide");
	$('.photo_back img[alt='+alt+']').addClass("hide");
	$('.photo_back img[alt='+alt+']').removeClass("see_it");
	$('.photo_back').removeClass("see_it");


});

};
