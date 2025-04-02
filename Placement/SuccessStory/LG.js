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
document.addEventListener("DOMContentLoaded", function () {
    const timerElement = document.getElementById("timer");
    const progressBar = document.getElementById("progress");

    if (!timerElement) {
        console.error("Timer element not found!");
        return;
    }

    function startCountdown() {
        const startTime = new Date("2025-03-31T00:00:00").getTime();
        const endTime = new Date("2025-04-10T23:59:59").getTime();

        function updateTimer() {
            let now = new Date().getTime();
            let timeLeft = Math.max(0, Math.floor((endTime - now) / 1000));

            let displayDays = Math.floor(timeLeft / (24 * 3600));
            let displayHours = Math.floor((timeLeft % (24 * 3600)) / 3600);
            let displayMinutes = Math.floor((timeLeft % 3600) / 60);
            let displaySeconds = timeLeft % 60;

            timerElement.textContent = `${displayDays}d ${displayHours.toString().padStart(2, '0')}:${displayMinutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;
            console.log("Timer Updated:", timerElement.textContent);

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerElement.textContent = "Offer Expired";
            }
        }

        updateTimer();
        const timerInterval = setInterval(updateTimer, 1000);
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
