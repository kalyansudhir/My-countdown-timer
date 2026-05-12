// ============================================
// COUNTDOWN TIMER - Improved Version
// ============================================

// 🎯 CHANGE THIS to your special day!
// Format: new Date(Year, Month-1, Day, Hour, Minute)
// Remember: January=0, February=1, ..., December=11

// Example dates you can use:
// const targetDate = new Date(2026, 05, 15, 0, 0);  // June 15, 2026
// const targetDate = new Date(2026, 11, 25, 0, 0); // December 25, 2026
// const targetDate = new Date(2027, 0, 1, 0, 0);   // January 1, 2027

const targetDate = new Date(2026, 5, 17, 0, 0); // Christmas 2026!

console.log("Target date:", targetDate);
console.log("Current date:", new Date());

function updateTimer() {
    const now = new Date();
    const difference = targetDate - now;

    console.log("Time difference (ms):", difference);

    // If the target date has already passed
    if (difference <= 0) {
        document.querySelector('.container').innerHTML = 
            '<h1>🎉 IT\'S HERE! 🎉</h1><p class="event-name">The big day has arrived!</p>';
        return;
    }

    // Calculate time units
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    console.log("Days:", days, "Hours:", hours, "Minutes:", minutes, "Seconds:", seconds);

    // Update the display with leading zeros
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Run immediately when page loads
updateTimer();

// Then update every second
setInterval(updateTimer, 1000);
