//random RGB color
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
		};

	function colorMachine(){
		var R = getRandomInt(0, 255);
		var G = getRandomInt(0, 255);
		var B = getRandomInt(0, 255);
		var randomColor = (R + "," + G + "," + B + "," + 0.8);
		var newColor = "rgba(" + randomColor + ")";
		return newColor;
	};

	function timeMachine(){
		var T = getRandomInt(30, 60);
		var newT = (T+"00");
		console.log(newT);
		return newT;
	};

	var winH = $(window).height();

var app = {

	/*colorMachine: function() {
		var R = getRandomInt(0, 255);
		var G = getRandomInt(0, 255);
		var B = getRandomInt(0, 255);
		var randomColor = (R + "," + G + "," + B + "," + 1);
		var newColor = "rgba(" + randomColor + ")";
		return newColor;
	},*/

	timeMachine:function(){
		var T = getRandomInt(30, 60);
		var newT = (T+"00");
		console.log(newT);
		return newT;
	},

	pageStyles: function(){
    var v = colorMachine();
		$('html').css({'background-color': v});
    $('nav ul a').css({'color': v});
    $("div p:nth-child(4)").html(v);
	},

  repeat:function(fn, times){
    for(var i = 0; i < times; i++) fn();
  },


	init: function() {
		/*console.log("color 1: " + app.colorMachine());
		console.log("color 2: " + app.colorMachine());
		console.log("color 3: " + app.colorMachine());
		console.log("color 4: " + app.colorMachine());
		console.log("color 5: " + app.colorMachine());*/
    app.pageStyles();
		//setInterval(app.pageStyles, app.timeMachine());
		/*setInterval(app.pageStyles, timeMachine());
		console.log("new ms: " + timeMachine());*/
	}

};

$(document).ready(function() {
	app.init();
  /*var v = colorMachine();*/
  /*$('html').css({'background-color': v});
  $('nav ul a').css({'color': v});
  $("div p:nth-child(4)").html(v);
  setInterval($('html').css({'background-color': colorMachine()}), app.timeMachine());*/

	$('html').click(function() {

    app.pageStyles();

	});

  $('div.x').click(function() {
    var t=4;
    var c=colorMachine();

    if ($(this).children('div').length > 0){
      //alert("Has " + $(this).children('div').length + "children");
      $('div.x').css({'background-color':''});
      $(this).children('div').css({'background-color':c,'z-index':99});
      console.log(c);
      return false;

    }else{
      var t=4;
      var c=colorMachine();

      $('div.x').css({'background-color':''});
      var e = $('<div style="background-color:' +c+ ' ;"></div>');
      var d = '<div style="background-color:' +c+ ' ;"></div>';
      for(var i = 0; i < t; i++) {
      $('div.x').append(d);
      //$('div.x').append("<div></div>");
      //$('div.x div').css({'background-color':c,'z-index':99});



  }}});

  $('div.x').children('div').click(function() {

    $(this).css({'background-color':c,'z-index':99});

  });

  /*('div.x div').click(function() {
    var c=colorMachine();
    $('this').css({'background-color':c});

  });*/

	/*$('div.tri').click(function() {
	//alert( "Handler for .click() called." );
		$(this).css({'background-color': colorMachine()});

	});*/

});
