var time = 0;

function formatTime() {
	var responce = '';
	var hours = 0;
	var mins = 0;
	var secs = time;

	while (secs >= 60) {
		secs -= 60;
		mins += 1;
	}

	while (mins >= 60) {
		mins -= 60;
		hours += 1;
	}

	if (secs == 0) {
		secs = '';
	} else if (secs == 1) {
		secs += ' second';
	} else if (secs > 1) {
		secs += ' seconds';
	}

	if (mins == 0) {
		mins = '';
	} else if (mins == 1) {
		mins += ' minute';
	} else if (mins > 1) {
		mins += ' minutes';
	}

	if (hours == 0) {
		hours = '';
	} else if (hours == 1) {
		hours += ' hour';
	} else if (hours > 1) {
		hours += ' hours';
	}

	if (hours != '') {
		responce += hours + ' ';
	}

	if (mins != '') {
		responce += mins + ' ';
	}

	if (secs != '') {
		responce += secs;
	}

	return responce;
}

function timer() {
	time++;
	var out = formatTime();

	$('div span').text(out);

	self.setTimeout('timer()', 1000);
}

$(function() {
	var playing = false;
	var audio = new Audio();
	audio.autoplay = true;
	audio.loop = true;
	audio.src = audio.canPlayType('audio/mp3') ? 'bike.mp3' : 'bike.ogg';

	$(audio).on('playing', function() {
		if (!playing) {
			playing = true;

			$('div').html('You have been cycling the third impact for <span>0 seconds</span>.');

			timer();
		}
	});

	$('img').click(function() {
		if (!playing) {
			$('div').text('Unleashing third impact...');

			audio.play();
		}
	});
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-18492091-1']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
