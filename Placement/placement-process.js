function toggleMenu() {
    let navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("show-menu");

    console.log("Menu toggled. Current classes:", navMenu.classList);
}



// Stats counting 
document.addEventListener("DOMContentLoaded", function () {
    function animateStats() {
        const stats = document.querySelectorAll(".stat h2");

        stats.forEach(stat => {
            let target = parseInt(stat.textContent.replace(/\D/g, "")); // Extract number
            let count = 0;
            let increment = target / 50; // Adjust speed

            let counter = setInterval(() => {
                count += increment;
                if (count >= target) {
                    count = target;
                    clearInterval(counter);
                }
                stat.textContent = Math.floor(count) + (stat.textContent.includes('%') ? '%' : '+'); // Maintain format
            }, 30);
        });
    }

    animateStats(); // Run animation on page load
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

// redirecting Enroll Now to Current BAtch
document.addEventListener("DOMContentLoaded", function () {
    const enrollButton = document.getElementById("hero-btn");

    if (enrollButton) {
        enrollButton.addEventListener("click", function () {
            window.location.href = "/Programs/Courses/EndtoEndDataAnalytics.html#unique-pricing-section";
        });

        // Optional: Change cursor to pointer for better UX
        enrollButton.style.cursor = "pointer";
    }
});