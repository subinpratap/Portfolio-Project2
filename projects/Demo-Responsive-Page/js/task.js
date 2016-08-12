$(document).ready(function(){
	
	//hides the left navbar and shows the hamburger menu at top
	$(".fa-bars").click(function(){
		$(".navbar").removeClass("navbar-hidden");
		$('#overlay').show();
	});
	
	//shows the left navbar and hides the hamburger menu
	$('#overlay').click(function(e) {
		$(".navbar").addClass("navbar-hidden");
		$('#overlay').hide();
	});
	
	//calls function color and bw
	$('.blackwhite').hover(color,bw);
	
});

//makes the image colorful
function color() {
	var id=$(this).data('target');
	$(id).removeClass('ds');
}

//makes the images black/white
function bw() {
	var id = $(this).data('target')
	$(id).addClass('ds');     
}


    