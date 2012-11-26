 $(document).ready(function() {

$(".subnav ul li:first-child").addClass("active");



// If the window gets resized or changes orientation, we loop raft again
$(window).resize(function() {
$('head').append('<meta name="viewport" content="initial-scale=1 maximum-scale=1"/>');
});


$("body").krioImageLoader();


$(".subnav ul li").click(function(e) {
  e.preventDefault();
  $(".subnav li").removeClass("active");
  $(this).addClass("active");
  var targetpanel = $(this).attr("title");
  $(".panel").slideUp();
  $('.'+targetpanel).slideDown();
});

$(".contactnow").click(function(e){
	e.preventDefault();
	$(".subnav li").removeClass("active");
	$(".subnav li.contacter").addClass("active");
	$(".panel").slideUp();
	$(".Contact").slideDown();
});

});



