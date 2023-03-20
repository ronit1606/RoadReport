
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, showError);
		} else {
			alert("Geolocation is not supported by this browser.");
		}

		function showPosition(position) {
			const lat = position.coords.latitude;
			const lng = position.coords.longitude;
			const location = { lat, lng };
			const map = new google.maps.Map(document.getElementById("map"), {
				center: location,
				zoom: 15
			});
			const marker = new google.maps.Marker({
				position: location,
				map: map
			});
			document.getElementById("location").value = JSON.stringify(location);
		}

		function showError(error) {
			switch(error.code) {
				case error.PERMISSION_DENIED:
					alert("User denied the request for Geolocation.");
					break;
				case error.POSITION_UNAVAILABLE:
					alert("Location information is unavailable.");
					break;
				case error.TIMEOUT:
					alert("The request to get user location timed out.");
					break;
				case error.UNKNOWN_ERROR:
					alert("An unknown error occurred.");
					break;
			}
		}