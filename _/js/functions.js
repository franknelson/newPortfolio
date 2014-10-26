// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


// remap jQuery to $
(function($){


/* trigger when page is ready */
$(document).ready(function (){

	var w = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	var h = (window.innerHeight > 0) ? window.innerHeight : screen.height;
	var n = $('nav').height();
	var ah = h-n ;
	var prop = ("0 0 " + ah + "px " + w + "px");

	$('div.tri').css("border-width",prop);

});


/* optional triggers

$(window).load(function() {

});

$(window).resize(function() {

});

*/


})(window.jQuery);
