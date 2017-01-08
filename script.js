var car = null; 
var carOnMove = "stop";
	function moveCar() {
		//get the wall position
		var wallPos = document.getElementById('wall').offsetLeft-126+'px';
			  if(wallPos!=(car.style.left) && carOnMove == "forward")
				{	
				car.style.left = parseInt(car.style.left)+1+'px';
					setTimeout(function() {
									moveCar();
								}, 5);
				}
			  else if(wallPos==(car.style.left)){
					 carOnMove = "stop";
					 $('#container').fadeOut('slow', function() {
					 $("#bang").fadeIn("slow");
				});
			  }
	  }

  function rewindCar() {
	var wallPos = document.getElementById('wall').offsetLeft+126+'px';    
	  if((car.style.left)!="0px" && carOnMove == "backward")
		{
	  car.style.left = parseInt(car.style.left)-1+'px';
	  setTimeout(rewindCar,7); 
	  }
		else if ((car.style.left)=="0px"){
				 carOnMove = "stop";
						setTimeout(function() {
								$("#start").removeAttr("disabled");
								}, 5);
		}    
	}

  function stopCar() {
    if(carOnMove != "stop")
		{
        carOnMove = "stop";
		car.style.left = parseInt(car.style.left)+'px';
		}
	}
	$(document).ready(function() {
		car = document.getElementById('Objcar');
		car.style.left = '0px'; 
		$("#start").removeAttr("disabled");
		$("#bang").hide();
				 $("#start").bind("click", function(){
					 $(this).attr("disabled","disabled");
					 carOnMove = "forward";
					 moveCar();			       
				 })
				  $("#stop").bind("click", function(){
					$("#start").removeAttr("disabled");
					stopCar();
				})
				  $("#rewind").bind("click", function(){
				  $("#start").removeAttr("disabled");
					stopCar();
					setTimeout(function(){
					carOnMove = "backward";
					  rewindCar()}, 300);
				 })
		})