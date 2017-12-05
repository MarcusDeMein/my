jQuery(document).ready(function()){
	
	var 
		degress = 0
		timer = setInterval(function() {
			
			degress++;
			jQuery('body').css('background-image', 'liner-gradient(' + degress + 'deg, #2E3192, #1BFFFF');
			
		}, 60000 / 360);
	
});