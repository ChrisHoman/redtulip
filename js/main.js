 $(document).ready(function() {

$(".subnav ul li:first-child").addClass("active");


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



