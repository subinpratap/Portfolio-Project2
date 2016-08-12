$(document).ready(function() {

	var id;

	$(".menu").click(function(){
	
		if ( $(".content-onclick-data").hasClass( "active" ) ) 
		{
			$(".content-onclick-data").removeClass("active");
			$(".nav-item").removeClass("active");
			$(".svg-left").removeClass(id);
			$(".svg-right").removeClass(id);
		}		
		else if ( $("#"+id).hasClass( "show" ) ){
			$(".content-onclick-data").removeClass("active");
			$(".nav-item").removeClass("active");
			$(".svg-left").removeClass(id);
			$(".svg-right").removeClass(id);
		}
		
		else{
			$(".content-onclick-data").addClass("active");
			$(".nav-item").addClass("active");
		}
		
		//$(".content-onclick-data").toggleClass("active");
		//$(".nav-item").toggleClass("active");
		$(this).toggleClass('open');
		
		if ( $("#"+id).hasClass( "show" ) ) {
			$("#"+id).removeClass("show");
			$(".svg-left").removeClass(id);
			$(".svg-right").removeClass(id);
		}

	});
	
	$(".close-button").click(function(){
	
		$(".svg-left").removeClass(id);
		$(".svg-right").removeClass(id);	
	
		$("#overlay ul li").addClass("show");//for overlay
		$("#overlay").addClass("show");//for overlay
		setTimeout(function(){ 
			//$("#overlay").css('z-index','-11');
			$("#overlay ul li").removeClass("show");
			$("#overlay").removeClass("show");
			},2800);
		
		
		
		$(".content-onclick-data").addClass("active"); //for nav items
		$(".nav-item").addClass("active"); //for nav items
		
		$("#"+id).removeClass('show');
		
	});
	
	$(".nav-item").click(function(){
		$(".content-onclick-data").removeClass("active");
		$(".nav-item").removeClass("active");
		
		id = $(this).data('target'); 
		
		$("#"+id).toggleClass('show');
		
		$(".svg-left").toggleClass(id);
		$(".svg-right").toggleClass(id);
		
		
		
		$("#overlay ul li").addClass("show");
		$("#overlay").addClass("show");
		//$("#overlay").css('z-index','2 !important');
		setTimeout(function(){ 
			//$("#overlay").css('z-index','-11');
			$("#overlay ul li").removeClass("show");
			$("#overlay").removeClass("show");
			},2800);
		
		if(id==="skills-expand"){
			//xyz().delay( 4000 );
			setTimeout(xyz, 2500);
		}
		
	});
	
	

	
	
	$('.phone').hover(handlerIn, handlerOut);
	
	function handlerIn() {
		$('.phone-number').addClass('show');	
	}

	function handlerOut() {
		$('.phone-number').removeClass('show');
	}
	
	var skilltype;
	var levels;
	function xyz(){
		console.log("l");
		skilltype=[html,css,javascript,jquery,bootstrap,postgresql];
		levels=[0.7,0.9,0.6,0.6,0.7,0.7];
		for(var i=0;i<6;i++)
			skillCircle(skilltype[i],levels[i]);	
	}	
		
		function skillCircle(skills,level){
			flags=1;
			var bar = new ProgressBar.Circle(skills, {
			color: '#aaa',
			// This has to be the same size as the maximum width to
			// prevent clipping
			strokeWidth: 3,
			trailWidth: 1,
			easing: 'easeInOut',
			duration: 1400,
			text: {
			autoStyleContainer: false
			},
			from: { color: '#aaa', width: 1 },
			to: { color: '#2874A6', width: 3 },
			// Set default step function for all animate calls
			step: function(state, circle) {
			circle.path.setAttribute('stroke', state.color);
			circle.path.setAttribute('stroke-width', state.width);

			var value = Math.round(circle.value() * 100);
			if (value === 0) {
			  circle.setText('');
			} else {
			  circle.setText(value);
			}

			}
			});
			bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
			bar.text.style.fontSize = '2rem';

			bar.animate(level);  // Number from 0.0 to 1.0
		}
	
	//percentage circle
	
	
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