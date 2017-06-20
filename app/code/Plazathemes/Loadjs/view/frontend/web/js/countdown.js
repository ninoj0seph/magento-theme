require([
  "jquery"
 ], function($){
	function count_exec(seconds,id) {
		var time = seconds;
		var this_sel = $(id);
		var seconds,minutes,hours,days;
		if (seconds <= 0) { // After the event date has passed
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
		} else {
			days = 			Math.floor(seconds / (60 * 60 * 24));		// Divide to find the number of days remaining
			seconds -=		days * 60 * 60 * 24;						// Subtract the number of (complete, => 24 hours) days calculated above
			
			hours = 		Math.floor(seconds / (60 * 60));			// Get the number of hours from that modified number ^
			seconds -=		hours * 60 * 60;
			
			minutes = 		Math.floor(seconds / 60);
			seconds -=		minutes * 60;
		}
		this_sel.find('.days').val(days).trigger('change');
		this_sel.find('.hours').val(hours).trigger('change');
		this_sel.find('.mins').val(minutes).trigger('change');
		this_sel.find('.secs').val(seconds).trigger('change');
		time = time - 1;
		setTimeout(function(){count_exec(time,id)}, 1000);
	} // End of count_exec();
});
									