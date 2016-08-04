$(function(){
	function initialize() {
		var mapCanvas = document.getElementById('mapCanvas');
		var myLatlng = new google.maps.LatLng(49.98935276, 36.22232348);
		var mapOptions = {
			center: myLatlng,
			zoom: 15,
			mapTypeControl: false,
			draggable: true,
			scaleControl: false,
			scrollwheel: false,
			navigationControl: false,
			streetViewControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(mapCanvas, mapOptions);
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'Харьков',
		});
	}
	google.maps.event.addDomListener(window, 'load', initialize);


	function getTimeRemaining(endtime) {
		var t = endtime - new Date();
		var miliseconds = Math.floor(t % 1000);
		var seconds = Math.floor((t / 1000) % 60);
		var minutes = Math.floor((t / 1000 / 60 ) % 60);
		var hours = Math.floor((t / 1000 / 60 / 60)%24);
		var days = Math.floor(t / 1000 / 60 / 60);
		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds,
			'miliseconds': miliseconds,
			'days': days,
		};
	}

	function initializeClock(id, endtime) {
		var clock = document.getElementById(id);
		var hoursSpan = clock.querySelector('.hours');
		var minutesSpan = clock.querySelector('.minutes');
		var secondsSpan = clock.querySelector('.seconds');
		var milisecondsSpan = clock.querySelector('.miliseconds');
		var daysSpan = clock.querySelector('.days');

		function updateClock() {
			var t = getTimeRemaining(endtime);

			hoursSpan.innerHTML = t.hours;
			minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
			secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
			milisecondsSpan.innerHTML = ('00' + t.miliseconds).slice(-3);
			daysSpan.innerHTML = t.days;

			if (t.total <= 0) {
				clearInterval(timeinterval);
			}
		}

		updateClock();
		var timeinterval = setInterval(updateClock, 1);
	}

	//new Date(year, month, day, hours, minutes, seconds, milliseconds)
	var deadline = new Date(2016, 9, 3, 11);
	initializeClock('timerToStart', deadline);

});
