var lastScrollTop = 0;

// Function to detect scroll direction and toggle navigation bar visibility
window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Scroll down
        document.getElementById("navbar").style.top = "-100px"; // Hide navigation bar
    } else {
        // Scroll up
        document.getElementById("navbar").style.top = "0"; // Show navigation bar
    }
    lastScrollTop = currentScroll;
});

// Get the menu button and the dropdown menu
const menuButton = document.getElementById('menuButton');
const dropdownMenu = document.getElementById('dropdownMenu');

// Add event listener to the menu button
menuButton.addEventListener('click', function() {
    // Toggle the 'show' class on the dropdown menu
    dropdownMenu.classList.toggle('show');
});
