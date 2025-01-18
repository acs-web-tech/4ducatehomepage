// Set the target date and time
const targetDate = new Date("2025-01-15T10:00:00").getTime(); // Replace with your event time

// Update the countdown every second
const countdownTimer = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft > 0) {
    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (269 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("days").innerText = days.toString().padStart(2, "0");
    document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
  } else {
    // If the countdown is over, stop the timer and show a message
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerText = "The event has started!";
  }
}, 1000);
