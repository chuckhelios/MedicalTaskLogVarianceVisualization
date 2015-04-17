// interactive variable
var inter_key= "overview";


// screen resize 
$(function(){
$('.upper-row, .lower-row').css({ height: 0.5* ($(window).innerHeight()-120) });
 $('.mid-row').css({ height: 40 });
 
  $(window).resize(function(){
    $('.upper-row, .lower-row').css({ height: 0.5* ($(window).innerHeight()-120) });
 	$('.mid-row').css({ height: 40 });

	// redraw when resize;
	removeDraw();
	redraw();
  });
});

// right arrow
$( ".right-arrow" ).click(function() {
  $( ".lower-left" )
  	.animate({
	    width: "80%",
	    opacity: 1,
	 }, 1000)
  	.animate({  
            width: "75%" 
    }, 400);
  $(".lower-right")
  	.animate({
	    width: "20%",
	    opacity: 0.6,
	 }, 950)
	.animate({  
        width: "25%" 
    },450);

  	// remove and redraw
	removeDraw();
	setTimeout(function(){
		redraw();
	}, 2000);

});
// end of right arrow

// left arrow
$( ".left-arrow" ).click(function() {
  $( ".lower-right" )
  	.animate({
	    width: "88%",
	    opacity: 1,
	 }, 1000)
  	.animate({  
            width: "85%" 
    }, 400);
  $(".lower-left")
  	.animate({
	    width: "12%",
	    opacity: 0.6,
	 }, 950)
	.animate({  
        width: "15%" 
    },450);

  	// remove and redraw
	removeDraw();
	setTimeout(function(){
		redraw();
	}, 2000);
});
// end of left arrow

// down arrow
$( ".down-arrow" ).click(function() {
	// enbale multiple
 	$('#multiples').attr("disabled", false);
 	
  $( ".upper-row" )
  	.animate({
	    height: 0.8* ($(window).innerHeight()-120),
	    opacity: 1,
	 }, 1000)
  	.animate({  
        height: 0.75* ($(window).innerHeight()-120),
    }, 400);
  $(".lower-row")
  	.animate({
	    height: 0.2* ($(window).innerHeight()-120),
	    opacity: 0.6,
	 }, 950)
	.animate({  
        height: 0.25* ($(window).innerHeight()-120),
    },450);
	$( ".upper-col" )
  	.animate({
	    width: "98%",
	 }, 1000)
  	.animate({  
        width: "95%",
    }, 400);
  	// remove and redraw
	removeDraw();
	setTimeout(function(){
		redraw();
	}, 2000);
});
// end of down arrow

// up arrow
$( ".up-arrow" ).click(function() {
	// disabale multiple
	jQuery("#ticketbtn input[id=multiples]:radio").attr('disabled',true);
	jQuery("#ticketbtn input[id=stacked]:radio").attr('checked',true);

  $( ".lower-row" )
  	.animate({
	    height: 0.85* ($(window).innerHeight()-120),
	    opacity: 1,
	 }, 1000)
  	.animate({  
        height: 0.80* ($(window).innerHeight()-120),
    }, 400);
  $(".upper-row")
  	.animate({
	    height: 0.15* ($(window).innerHeight()-120),
	    opacity: 0.6,
	 }, 950)
	.animate({  
        height: 0.20* ($(window).innerHeight()-120),
    },450);
	$( ".upper-col" )
  	.animate({
	    width: "75%",
	 }, 1000)
  	.animate({  
        width: "70%",
    }, 400);    

	removeDraw();
	setTimeout(function(){
		redraw();
	}, 2000);
});
// end of up arrow

// plus reset arrow
$( ".plus-reset" ).click(function() {
		// disabale multiple
	jQuery("#ticketbtn input[id=multiples]:radio").attr('disabled',true);
	jQuery("#ticketbtn input[id=stacked]:radio").attr('checked',true);
  $( ".lower-row" )
  	.animate({
	    height: 0.5* ($(window).innerHeight()-120),
	    opacity: 1,
	 }, 1000);
  $(".upper-row")
  	.animate({
	    height: 0.5* ($(window).innerHeight()-120),
	    opacity: 1,
	 }, 950);
  $( ".lower-right" )
  	.animate({
	    width: "50%",
	    opacity: 1,
	 }, 1000);
  $(".lower-left")
  	.animate({
	    width: "50%",
	    opacity: 1,
	 }, 950);
	$( ".upper-col" )
  	.animate({
	    width: "70%",
	 }, 950)

	removeDraw();
	setTimeout(function(){
		redraw();
	}, 1100);
});
// end of plus reset 


function removeDraw(){
	$('#upper svg').remove();
	$(".chart svg").remove();
	$(".chart .remove").remove();
	$("#box-viz svg").remove();
	$("#box-viz #d3plus_message").remove();
	$("#box-viz #d3plus_drawer").remove();

}
// redraw when resize;
function redraw() {
	// setTimeout(redraw, 1);

	barchat();
	streamChart();
	boxplot();
}

///////////////////////////////////////////////
// onchange department id

$("#departmentID").click(function(){
	$(".chart svg").remove();
	$(".chart .remove").remove();
	$("#box-viz svg").remove();
	$("#box-viz #d3plus_message").remove();
	$("#box-viz #d3plus_drawer").remove();
  subtitleTxt = "Overall View";
    csvpath = "./athena_streamplot_Over.csv";
  	box_path = "./anthena_boxplot_date_over.csv";
    streamChart();
    boxplot();
  }); // end of onchange


$('.BSswitch').bootstrapSwitch('state', true);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// Create a new date from a string, return as a timestamp.
// function timestamp(str){
//     return new Date(str).getTime();   
// }


// // Create a list of day and monthnames.
// var
// 	weekdays = [
// 		"Sunday", "Monday", "Tuesday",
// 		"Wednesday", "Thursday", "Friday",
// 		"Saturday"
// 	],
// 	months = [
// 		"January", "February", "March",
// 		"April", "May", "June", "July",
// 		"August", "September", "October",
// 		"November", "December"
// 	];

// // Append a suffix to dates.
// // Example: 23 => 23rd, 1 => 1st.
// function nth (d) {
//   if(d>3 && d<21) return 'th';
//   switch (d % 10) {
//         case 1:  return "st";
//         case 2:  return "nd";
//         case 3:  return "rd";
//         default: return "th";
//     }
// }

// // Create a string representation of the date.
// function formatDate ( date ) {
//     return months[date.getMonth()] + "/" + date.getDate()
//         + "/" + date.getFullYear();
// }

// // Write a date as a pretty value.
// function setDate( value ){
//     $(this).html(formatDate(new Date(+value)));   
// }

// $("#slider-date").noUiSlider({
// // Create two timestamps to define a range.
//     range: {
//         min: timestamp('June 1, 2012'),
//         max: timestamp('June 30, 2012')
//     },
	
// // Steps of one day
//     step: 1 * 24 * 60 * 60 * 1000,
	
// // Two more timestamps indicate the handle starting positions.
//     start: [ timestamp('June 1, 2012'), timestamp('June 30, 2012') ],
	
// // No decimals
// 	format: wNumb({
// 		decimals: 0
// 	})
// });

// $("#slider-date").Link('lower').to($("#event-start"), setDate);
// $("#slider-date").Link('upper').to($("#event-end"), setDate);
// ////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////

// // bind timestamp
// var begin_date = new Date( $("#event-start").text());
// var end_date = new Date($("#event-end").text());
// range = []
// mil = 86400000 //24h
// for (var i=begin_date.getTime(); i<end_date.getTime();i=i+mil) {

//   range.push(new Date(i))
// }

// var rest_range = [];
// $("#slider-date").change(function(){
// 	rest_range = range;
// 	begin_date = new Date( $("#event-start").text());
// 	end_date = new Date($("#event-end").text());
// 	for (var i=begin_date.getTime(); i<end_date.getTime();i=i+mil) {
//   		range.pop(new Date(i))
// 	}
// 	$('#upper svg').remove();
// 	barchat();
// });

// console.log(rest_range);
// end of bind timestamp

