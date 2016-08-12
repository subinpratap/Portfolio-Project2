var isStarted=false;
var best_time=100;

window.onload=function() {

	document.getElementById("start-button").onclick=function(){
		start();
		document.getElementById("stop-button").style.display = "block";
	}
	
	document.getElementById("stop-button").onclick=function(){
		stop();
	}
	
}

function start(){	
	isStarted=true;
	document.getElementById("para").style.display="none";
	reaction();
}

function stop(){
	isStarted=false
	document.getElementById("stop-button").style.display = "none";
	document.getElementById("start-button").style.visibility = "visible";
	document.getElementById("square").style.display="none";
	document.getElementById("spa2").innerHTML=(best_time);
	document.getElementById("para").style.display="block";
}

function reaction()
{
		document.getElementById("start-button").style.visibility = "hidden";
		
		var clickedtime; var createdtime; var reactiontime;
		
		function getRandomColor(){
			var letters='0123456789ABCDEF'.split('');
			var color='#';
			for(var i=0;i<6;i++){
				color += letters[Math.floor(Math.random() * 16)];
			} 
			return color;
		}
		
		function makebox(){
			
			if(isStarted==false) return;
			
			var x=Math.random();
			x=x*4000;
			
			setTimeout( function(){
				
				if(Math.random()>0.5){
				
				document.getElementById("square").style.borderRadius="100%";
				
				}else{
				document.getElementById("square").style.borderRadius="0%";
				
				}
				
				var poswidth=Math.random();
				poswidth=poswidth*1270;
				
				var posheight=Math.random();
				posheight=posheight*600;
				
				document.getElementById("square").style.left=poswidth+"px";
				document.getElementById("square").style.top=posheight+"px";
				document.getElementById("square").style.backgroundColor=getRandomColor();
				document.getElementById("square").style.display="block";
				createdtime=Date.now();
			},x);
		}
		
		document.getElementById("square").onclick=function(){
		
			clickedtime=Date.now();
			document.getElementById("square").style.display="none";
			reactiontime=(clickedtime-createdtime)/1000;
			best_reactiontime(reactiontime);
			document.getElementById("spa").innerHTML=(reactiontime);
			makebox();
		}
		
		makebox();
}	

function best_reactiontime(reactiontime){
	if(reactiontime<=best_time)
	{
		best_time=reactiontime;
	}
	
	console.log(best_time);
	
}		