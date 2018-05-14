// jQuery syntax $(selector).action()//
$(document).ready(function(){
	
	//Get the current location of the user 
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(success,error);
	} else {
		console.log("Geolocation not supported by browser");
	}
	
	function success(positiondata){
		var latitude = positiondata.coords.latitude;
		var longitude = positiondata.coords.longitude;
		weatherFind(latitude, longitude);
	}
	
	function error(errordata){
		console.log("Error");
	}
	
	function weatherFind(latitude,longitude){
		console.log(latitude);
		console.log(longitude);
		var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;
				
		$.getJSON(URL, function (apidata){
			console.log(apidata);
			updateWeatherPage(apidata);
		});
	}

	
	function updateWeatherPage(apidata){
		var city = apidata.name;
		var temperature = Math.round(apidata.main.temp);
		var desc = apidata.weather[0].description;
		var weatherimage = apidata.weather[0].icon;
		console.log (desc);
		console.log (weatherimage);
		
		$(".city").html(city);
		$(".temperature").html(temperature);
		$(".desc").html(desc);
		$("#weatherimage").attr("src",weatherimage);
		
	}
		
			
});