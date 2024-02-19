// Calling showTime function at every second
setInterval(showTime, 1000);

// Defining showTime function
function showTime() {
	// Getting current time and date
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();

	let currentTime = hour + ":" + min + ":" + sec;

	// Displaying the time
	document.getElementById("clock").innerHTML = currentTime;
}

showTime();


