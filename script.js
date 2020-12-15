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
	$('#tweet').attr('href', 'https://twitter.com/intent/tweet?text=I+lasted+' + out + '+https%3A%2F%2Fchickenonaraft.com+%23chickenonaraft');

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
		}
	});
})();
