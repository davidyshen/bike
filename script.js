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
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-18492091-1']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
