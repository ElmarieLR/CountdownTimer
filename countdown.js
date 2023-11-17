// Set the date we're counting down to
let countDownDate = new Date("2023-12-14");

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days
  let days = Math.ceil(distance / (1000 * 60 * 60 * 24));

  // Display the result in the element with id="timerpar" 
  if (days != 0) {
    document.getElementById("timerpar").innerHTML = days + " slapies";
  } else {
	// If the count down is finished, write some text
	clearInterval(x);
	document.getElementById("pretimer").remove();
	document.getElementById("posttimer").remove();
	document.getElementById("timerpar").innerHTML = "Hier gaan ons!";
  }
}, 1000);