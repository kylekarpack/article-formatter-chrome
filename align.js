var style = document.getElementsByTagName("style"); 
if (style.length <= 1 || style[0].innerHTML === "") {

	var imgs = document.getElementsByTagName("img");
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].style.maxWidth = "100%";
	}

	function fontMargin() {  
		var scaleWidth = window.innerWidth < 768 ? 0.8 + 0.2*(1 - ((window.innerWidth - 360)/(768 - 360))) : 0.8
		var scaleWidth = window.innerWidth < 360 ? 1 : scaleWidth;
		var OPT_WIDTH = window.innerWidth < 960 ? scaleWidth * window.innerWidth : 768;
		var body = document.getElementsByTagName("body")[0];

		//percent margin for each side: 100*fraction, divided by 2 margins
		var margin = ((window.innerWidth - OPT_WIDTH)/window.innerWidth)*50; 
		body.style.marginRight = margin + "%";
		body.style.marginLeft = margin + "%";
		
		console.log(scaleWidth);
		var font = 20 - (scaleWidth - 0.8) * 30;
		body.style.fontSize = font;
	}

	window.onresize = function(event) {
		fontMargin();
	}
	window.onload = fontMargin;
}