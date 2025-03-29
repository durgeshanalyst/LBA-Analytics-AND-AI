// Smooth Scroll for "Explore More" Button
document.querySelector('.explore-btn').addEventListener('click', function () {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

// Navbar Highlight on Scroll
window.addEventListener('scroll', function () {
    document.querySelector('header').classList.toggle('sticky', window.scrollY > 50);
});


// Program

document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.querySelector(".dropdown");
    let dropdownContent = document.querySelector(".dropdown-content");
    let closeTimeout; // Holds the timeout for closing

    if (!dropdown || !dropdownContent) return;

    // Show dropdown when hovering over the button
    dropdown.addEventListener("mouseenter", function () {
        clearTimeout(closeTimeout); // Cancel closing if triggered
        dropdownContent.style.display = "block";
    });

    // Keep it open when hovering inside the dropdown
    dropdownContent.addEventListener("mouseenter", function () {
        clearTimeout(closeTimeout); // Cancel closing if triggered
        dropdownContent.style.display = "block";
    });

    // Delay closing when leaving both button & content
    dropdown.addEventListener("mouseleave", function () {
        closeTimeout = setTimeout(() => {
            dropdownContent.style.display = "none";
        }, 300); // Short delay to allow smooth transition
    });

    dropdownContent.addEventListener("mouseleave", function () {
        closeTimeout = setTimeout(() => {
            dropdownContent.style.display = "none";
        }, 300); // Short delay to allow smooth transition
    });
});





// Timer Countdown
document.addEventListener("DOMContentLoaded", function () {
    function startCountdown(hours) {
        let time = hours * 60 * 60; // Convert hours to seconds
        const timerElement = document.getElementById("timer");

        function updateTimer() {
            const displayHours = Math.floor(time / 3600);
            const displayMinutes = Math.floor((time % 3600) / 60);
            const displaySeconds = time % 60;

            timerElement.textContent = `${displayHours.toString().padStart(2, '0')}:${displayMinutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;
            if (time > 0) {
                time--;
                setTimeout(updateTimer, 1000);
            } else {
                time = 6 * 60 * 60;
                setTimeout(updateTimer, 1000);
            }
        }
        updateTimer();
    }

    startCountdown(6); // Start countdown from 6 hours
});


// Program switcher

    function switchTab(tabId, element) {
        // Hide all tab content
        document.querySelectorAll(".tab-content").forEach(tab => {
            tab.classList.remove("active");
        });

        // Show the selected tab content
        document.getElementById(tabId).classList.add("active");

        // Remove active class from all buttons and hide arrows
        document.querySelectorAll(".tab-button").forEach(button => {
            button.classList.remove("active");
            button.querySelector(".arrow-icon").style.display = "none";
        });

        // Add active class to the clicked button and show the arrow
        element.classList.add("active");
        element.querySelector(".arrow-icon").style.display = "inline-block";
    }

 

    document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.querySelector(".hamburger");
        const nav = document.querySelector("nav");
    
        if (!hamburger || !nav) return; // Exit if elements are missing
    
        // Function to toggle the menu
        function toggleMenu() {
            nav.classList.toggle("active");
            document.body.classList.toggle("nav-open"); // Prevent scrolling when menu is open
        }
    
        // Close menu when clicking outside
        function closeMenuOnClickOutside(event) {
            if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
                nav.classList.remove("active");
                document.body.classList.remove("nav-open");
            }
        }
    
        // Close menu when pressing the Escape key
        function closeMenuOnEscape(event) {
            if (event.key === "Escape") {
                nav.classList.remove("active");
                document.body.classList.remove("nav-open");
            }
        }
    
        // Event listeners
        hamburger.addEventListener("click", toggleMenu);
        document.addEventListener("click", closeMenuOnClickOutside);
        document.addEventListener("keydown", closeMenuOnEscape);
    });
    

// FAQ
function showAnswer(index) {
    const answer = document.getElementById(`answer-${index}`);
    
    // Toggle the 'show' class
    if (answer.classList.contains("show")) {
        answer.classList.remove("show");
    } else {
        // Hide all other answers before showing the selected one
        document.querySelectorAll(".answer").forEach(ans => ans.classList.remove("show"));
        answer.classList.add("show");
    }
}

// Announcement bar hide and shift up
document.addEventListener("DOMContentLoaded", function () {
    const announcementBar = document.querySelector(".announcement-bar");
    const closeBtn = document.querySelector(".close-btn");
    const header = document.querySelector("header");

    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            announcementBar.classList.add("hidden"); // Hide announcement bar
            header.classList.add("shift-up"); // Move navbar up
        });
    }
});


