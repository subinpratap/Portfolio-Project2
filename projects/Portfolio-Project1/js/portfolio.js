$(document).ready(function() {

	var navHeight;
	var prevnavHeight=0;
	
	setTimeout(function(){
		$('body').addClass('loaded');
	},3000);
	
	$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

	$(window).bind('scroll', function() {        //for giving topbar new props when scrolling
	   var xx = $( window ).height() - 600;
			 if ($(window).scrollTop() > xx) {
				 $('.navbar-inverse').addClass('scroll-fixed');
				 $('.navbar-brand').addClass('scroll-fixed-color');
				 $('.navbar-brand').animate({fontSize: "18px"},500);
				 
			 }
			 else {
				 $('.navbar-inverse').removeClass('scroll-fixed');
				$('.navbar-brand').removeClass('scroll-fixed-color');
				//$('.navbar-brand').animate({fontSize: "22px"},500);
			 }
			 
		navHeight=($(window).scrollTop());
		//console.log(navHeight);
		
		if(prevnavHeight<navHeight)
			$(".fa-paper-plane").animate({left: '+=12', top: '-=3.45'}, 10);
		else
			$(".fa-paper-plane").animate({left: '-=12', top: '+=3.45'}, 10);
			prevnavHeight=navHeight;	 
	});

	$("a.navbar-brand[href^='#']").on('click',function(e){
		
		e.preventDefault();
		
		var hash=this.hash;
		
		$('html,body').animate({
			scrollTop:$(this.hash).offset().top
			},800,function(){
				window.location.hash=hash;
			});
		
	});
	
    $(".navbar-collapse ul li a[href^='#']").on('click',function(e){
		
		e.preventDefault();
		
		var hash=this.hash;
		
		$('html,body').animate({
			scrollTop:$(this.hash).offset().top
			},800,function(){
				window.location.hash=hash;
			});
		
	}); 
	
	$("a#find-out[href^='#']").on('click',function(e){
		console.log("clicked");
		e.preventDefault();
		
		var hash=this.hash;
		
		$('html,body').animate({
			scrollTop:$(this.hash).offset().top
			},500,function(){
				window.location.hash=hash;
			});
		
	});
	

	
	$("#ilike-stuff").children().css({"display":"none"});
	
	setInterval(function(){
		$("#ilike-stuff")
		.children(':first-child')
		.animate({'letter-spacing': '8px'}, 1000)
		.fadeOut(300)
		.next()
		.css({'letter-spacing': '1px'})
		.fadeIn(2000)
		.end()
		.appendTo('#ilike-stuff');
	}, 4000);
	
	new WOW().init();
	
});