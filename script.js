// Smooth Scroll for "Explore More" Button
document.addEventListener("DOMContentLoaded", function () {
    const exploreBtn = document.querySelector('.explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function () {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        });
    }
});

// Navbar Highlight on Scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 50);
    }
});

// Discount Click Stats Card
document.addEventListener("DOMContentLoaded", function () {
    const statsCard = document.querySelector(".stats-card");
    if (statsCard) {
        statsCard.addEventListener("click", function () {
            window.location.href = "/Programs/Courses/EndtoEndDataAnalytics.html#unique-pricing-section";
        });
        statsCard.style.cursor = "pointer";
    }
});

// Redirecting "Enroll Now" to Pricing Page
document.addEventListener("DOMContentLoaded", function () {
    const enrollButton = document.getElementById("nav-enroll");
    if (enrollButton) {
        enrollButton.addEventListener("click", function () {
            window.location.href = "/Programs/Courses/EndtoEndDataAnalytics.html#unique-pricing-section";
        });
        enrollButton.style.cursor = "pointer";
    }
});

// Program Dropdown
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropdownContent = document.querySelector(".dropdown-content");
    let closeTimeout;

    if (dropdown && dropdownContent) {
        dropdown.addEventListener("mouseenter", function () {
            clearTimeout(closeTimeout);
            dropdownContent.style.display = "block";
        });

        dropdownContent.addEventListener("mouseenter", function () {
            clearTimeout(closeTimeout);
            dropdownContent.style.display = "block";
        });

        dropdown.addEventListener("mouseleave", function () {
            closeTimeout = setTimeout(() => {
                dropdownContent.style.display = "none";
            }, 300);
        });

        dropdownContent.addEventListener("mouseleave", function () {
            closeTimeout = setTimeout(() => {
                dropdownContent.style.display = "none";
            }, 300);
        });
    }
});

// Timer Countdown
document.addEventListener("DOMContentLoaded", function () {
    const timerElement = document.getElementById("timer");
    const progressBar = document.getElementById("progress");

    if (!timerElement || !progressBar) return; // Prevents errors if missing

    function startCountdown() {
        let endTime = new Date("2025-04-10T23:59:59").getTime();

        function updateTimer() {
            let now = new Date().getTime();
            let timeLeft = Math.max(0, Math.floor((endTime - now) / 1000));

            let displayDays = Math.floor(timeLeft / (24 * 3600));
            let displayHours = Math.floor((timeLeft % (24 * 3600)) / 3600);
            let displayMinutes = Math.floor((timeLeft % 3600) / 60);
            let displaySeconds = timeLeft % 60;

            timerElement.textContent = `${displayDays}d ${displayHours.toString().padStart(2, '0')}:${displayMinutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;

            let totalSeconds = (endTime - new Date("2025-03-31T00:00:00").getTime()) / 1000;
            let percentage = ((totalSeconds - timeLeft) / totalSeconds) * 100;
            progressBar.style.width = `${percentage}%`;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerElement.textContent = "Offer Expired";
                progressBar.style.width = "100%";
            }
        }

        const timerInterval = setInterval(updateTimer, 1000);
        updateTimer();
    }

    startCountdown();
});

// Program Switcher
function switchTab(tabId, element) {
    const tabContent = document.getElementById(tabId);
    if (!tabContent) return; // Avoid error if missing

    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.classList.remove("active");
    });

    tabContent.classList.add("active");

    document.querySelectorAll(".tab-button").forEach(button => {
        button.classList.remove("active");
        const arrowIcon = button.querySelector(".arrow-icon");
        if (arrowIcon) arrowIcon.style.display = "none";
    });

    element.classList.add("active");
    const arrowIcon = element.querySelector(".arrow-icon");
    if (arrowIcon) arrowIcon.style.display = "inline-block";
}

// Hamburger Toggle
function toggleMenu() {
    const nav = document.querySelector("nav");
    if (nav) {
        nav.classList.toggle("active");
        document.querySelectorAll(".dropdown-content").forEach(content => {
            content.style.display = "none";
        });
    }
}

// Toggle Dropdown Functionality
function toggleDropdown(event) {
    event.stopPropagation();
    const dropdown = event.currentTarget.querySelector(".dropdown-content");

    if (dropdown) {
        document.querySelectorAll(".dropdown-content").forEach(content => {
            if (content !== dropdown) content.style.display = "none";
        });

        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    }
}

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown-content").forEach(content => {
            content.style.display = "none";
        });
    }
});

// FAQ Toggle
function showAnswer(index) {
    const answer = document.getElementById(`answer-${index}`);
    if (answer) {
        if (answer.classList.contains("show")) {
            answer.classList.remove("show");
        } else {
            document.querySelectorAll(".answer").forEach(ans => ans.classList.remove("show"));
            answer.classList.add("show");
        }
    }
}

// Announcement Bar Hide & Shift Up
document.addEventListener("DOMContentLoaded", function () {
    const announcementBar = document.querySelector(".announcement-bar");
    const closeBtn = document.querySelector(".close-btn");
    const header = document.querySelector("header");

    if (closeBtn && announcementBar && header) {
        closeBtn.addEventListener("click", function () {
            announcementBar.classList.add("hidden");
            header.classList.add("shift-up");
            
            setTimeout(() => {
                announcementBar.style.display = "none";
            }, 300);
        });
    }
});
