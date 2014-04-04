// JavaScript Document
$(document).ready(function() {
	
	// GLOBAL VARIABLES
	
	// STATIONS
	var stationsArray = ["01 Album of the Week","02 Today's Hits","03 '80s,'90s & Today","04 '00 Hits","05 Soft Hits","06 Oldies","07 '70s Hits", "08 Love Songs", "09 Party Hits", "10 Classic Hits", "11 Pop Workout", "12 Pop Remix", "13 Easy Listening", "14 Contemporary Jazz", "15 Hard Rock" ];

	// GENRES
	var genreArray = [ "My Stations", "Spotlight", "Pop", "Rock", "Dance", "Electronic", "HipHop", "R&B", "Ambient", "Chill", "World", "Jazz", "Country" ];

	
	// FUNCTIONS
	
	// DRAG BUTTON BOX 
	function dragControls(){
			
		$('.buttonBox').draggable();
		$('.buttonBox2').draggable();
		$('.channelBox').draggable();
		$('.tunerArea').draggable();
		}
		
	// CREATES LABELS UNDER THE TUNER BAR
	function createLabels(){
		
		for (var i=0; i<genreArray.length; i++){
			$('.labels').append("<p class = \"genres\">"+genreArray[i] +"</p>");
		}
	}
	
	// ENABLES THE PLAYHEAD TO BE DRAGGED
	function dragPlayhead(){
		
		tunerX = $('.tunerBar').offset().left;
		tunerY = tunerX + $('.tunerBar').width();
		
		// CONSTRAINS THE PLAYHEAD WITHIN THE TUNER - NOTE, DOES NOT WORK AT THIS MOMENT
		if ($('.playHead').offset().left>tunerX){
			$('.playheadHitArea').draggable({axis: "x" });
		}
	}
	
	// EXPANDING BUTTON BOXEX
	function expandingButtons(){
			
		$('.buttonBox').hover(function(){	
			
			var easing = "easeInOutExpo";

			$('#buttonB').toggleClass("buttonBOpen", 1000, easing);
			$('#buttonC').toggleClass("buttonCOpen", 1000, easing);
			$('#buttonD').toggleClass("buttonDOpen", 1000, easing);
			$('#buttonE').toggleClass("buttonEOpen", 1000, easing);
			$('#buttonF').toggleClass("buttonFOpen", 1000, easing);
			
			});
	}
	
	// TEST MESSAGE
		function sendMessage(x){
			console.log(x);
		}
		
	// FUNCTIONS TO RUN ONCE THE PAGE LOADS 
		dragControls();
		createLabels();
		dragPlayhead();
		expandingButtons();
		sendMessage("Test 7");
	});
	
	