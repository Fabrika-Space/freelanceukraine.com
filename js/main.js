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
		}
		var map = new google.maps.Map(mapCanvas, mapOptions)
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'Харьков',
		});
	}
	google.maps.event.addDomListener(window, 'load', initialize);


	function getTimeRemaining(endtime) {
		var t = Date.parse(endtime) - Date.parse(new Date());
		var seconds = Math.floor((t / 1000) % 60);
		var minutes = Math.floor((t / 1000 / 60) % 60);
		var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		var days = Math.floor(t / (1000 * 60 * 60 * 24));
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function initializeClock(id, endtime) {
		var clock = document.getElementById(id);
		var daysSpan = clock.querySelector('.days');
		var hoursSpan = clock.querySelector('.hours');
		var minutesSpan = clock.querySelector('.minutes');
		var secondsSpan = clock.querySelector('.seconds');

		function updateClock() {
			var t = getTimeRemaining(endtime);

			daysSpan.innerHTML = t.days;
			hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
			minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
			secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

			if (t.total <= 0) {
				clearInterval(timeinterval);
			}
		}

		updateClock();
		var timeinterval = setInterval(updateClock, 1000);
	}

	//new Date(year, month, day, hours, minutes, seconds, milliseconds)
	var deadline = new Date(2016, 5, 12, 10);
	initializeClock('timerToStart', deadline);

});