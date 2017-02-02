$(function() {
  "use strict";
  	var newYear = new Date(); 
	newYear = new Date(newYear.getFullYear() + 1, - 5, 1); 
	$('#comming-soon').countdown({until: newYear}); 
});