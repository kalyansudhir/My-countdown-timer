// This is the brain - it does the counting!

// 🎯 CHANGE THIS DATE to your special day!
// Format: Year, Month (0-11), Day, Hour, Minute
// Month 0 = January, 11 = December
const targetDate = new Date(2026, 11, 25, 0, 0); // My Birthday!

function updateTimer() {
    const now = new Date();
    const difference = targetDate - now;

    // Calculate time left
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the numbers on screen
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    // If time is up!
    if (difference < 0) {
        document.querySelector('.container').innerHTML = 
            '<h1>🎉 IT\'S HERE! 🎉</h1><p>The big day has arrived!</p>';
    }
}

// Update every second
setInterval(updateTimer, 1000);
updateTimer(); // Run once immediately
