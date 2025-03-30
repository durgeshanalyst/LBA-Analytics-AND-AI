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


// javascrip for discout click stats card
document.addEventListener("DOMContentLoaded", function () {
    const statsCard = document.querySelector(".stats-card");
    
    if (statsCard) {
        statsCard.addEventListener("click", function () {
            window.location.href = "/Programs/Courses/EndtoEndDataAnalytics.html#unique-pricing-section";
        });

        // Optional: Change cursor to pointer to indicate clickability
        statsCard.style.cursor = "pointer";
    }
});


// redirecting Enroll now to pricng page batch
document.addEventListener("DOMContentLoaded", function () {
    const enrollButton = document.getElementById("nav-enroll");

    if (enrollButton) {
        enrollButton.addEventListener("click", function () {
            window.location.href = "/Programs/Courses/EndtoEndDataAnalytics.html#unique-pricing-section";
        });

        // Optional: Change cursor to pointer for better UX
        enrollButton.style.cursor = "pointer";
    }
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
        const timerElement = document.getElementById("timer");
        const progressBar = document.getElementById("progress");
        const offerElement = document.getElementById("offer");
        
        let endTime = localStorage.getItem("countdownEndTime");
        if (!endTime) {
            endTime = Date.now() + hours * 60 * 60 * 1000; // Set expiry time
            localStorage.setItem("countdownEndTime", endTime);
        } else {
            endTime = parseInt(endTime);
        }

        function updateTimer() {
            const now = Date.now();
            let timeLeft = Math.max(0, Math.floor((endTime - now) / 1000));
            
            const displayHours = Math.floor(timeLeft / 3600);
            const displayMinutes = Math.floor((timeLeft % 3600) / 60);
            const displaySeconds = timeLeft % 60;

            timerElement.textContent = `${displayHours.toString().padStart(2, '0')}:${displayMinutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;
            
            // Update progress bar
            const percentage = ((hours * 60 * 60 - timeLeft) / (hours * 60 * 60)) * 100;
            progressBar.style.width = `${percentage}%`;

            // Dynamic Discount Updates
            if (timeLeft > 18 * 60 * 60) {
                offerElement.textContent = "🔥 20% OFF - Enroll Now!";
            } else if (timeLeft > 12 * 60 * 60) {
                offerElement.textContent = "⚡ 15% OFF - Limited Time!";
            } else if (timeLeft > 6 * 60 * 60) {
                offerElement.textContent = "✨ 10% OFF - Hurry Up!";
            } else {
                offerElement.textContent = "⏳ Last Chance! Enroll Now!";
            }

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                localStorage.removeItem("countdownEndTime");
                window.location.href = "https://letsbeanalyst.com/enrollment-closed";
            }
        }
        
        const timerInterval = setInterval(updateTimer, 1000);
        updateTimer();
    }

    startCountdown(24); 
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

    
//  hamburegr toggle
// Toggle Menu for Mobile View
function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");

    // Hide the dropdown when toggling the menu
    document.querySelectorAll(".dropdown-content").forEach((content) => {
        content.style.display = "none";
    });
}

// Toggle Dropdown Functionality
function toggleDropdown(event) {
    event.stopPropagation(); // Prevents click from propagating to the document body
    const dropdown = event.currentTarget.querySelector(".dropdown-content");

    // Close other open dropdowns before opening the current one
    document.querySelectorAll(".dropdown-content").forEach((content) => {
        if (content !== dropdown) {
            content.style.display = "none";
        }
    });

    // Toggle the current dropdown
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown-content").forEach((content) => {
            content.style.display = "none";
        });
    }
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
            
            // Wait for transition to complete, then remove it from layout
            setTimeout(() => {
                announcementBar.style.display = "none";
            }, 300); // Adjust delay to match CSS transition
        });
    }
});



