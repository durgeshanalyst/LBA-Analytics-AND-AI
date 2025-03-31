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

// programs


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

    