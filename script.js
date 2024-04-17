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

const menuButton = document.getElementById('menuButton');
const dropdownMenu = document.getElementById('dropdownMenu');

menuButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

$(document).ready(function() {
    $('.gallery img').hover(function() {
        $(this).next('.overlay').css('opacity', 1);
    }, function() {
        $(this).next('.overlay').css('opacity', 0);
    });
});

$(document).ready(function() {
    // Hide the dropdown menu by default
    $('.dropdown-menu').hide();

    // Toggle the dropdown menu when clicking the menu button
    $('#menuButton').click(function() {
        $('.dropdown-menu').toggle();
        // Toggle a class to change the appearance of the menu icon
        $(this).find('i').toggleClass('fa-bars fa-times');
    });
});


