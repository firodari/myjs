// Random Messages List
const messages = [
    "Random Message 1",
    "Random Message 2",
    "Random Message 3",
    "Random Message 4",
    "Random Message 5"
];

// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Create a variable for the element that contains the message
    var messageElement = document.querySelector(".bottom-message");

    // Display messages periodically
    let currentIndex = 0;
    setInterval(function () {
        if (currentIndex === messages.length) {
            currentIndex = 0;
        }
        messageElement.textContent = messages[currentIndex];
        messageElement.classList.add("message-visible");
        setTimeout(function () {
            messageElement.classList.remove("message-visible");
        }, 3000); // Display the message for 3 seconds
        currentIndex++;
    }, 4000); // Switch messages every 4 seconds
});
