document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");

    // Example: Button alert on "Try Masterclass"
    document.querySelector(".btn.primary").addEventListener("click", function () {
        alert("Thank you for trying our Masterclass!");
    });
});

function toggleMenu() {
    let navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("show-menu");

    console.log("Menu toggled. Current classes:", navMenu.classList);
}


// Syllabus
function toggleChapter(element) {
    let chapters = document.querySelectorAll('.chapter p');
    chapters.forEach(chapter => {
        if (chapter !== element.querySelector('p')) {
            chapter.style.display = "none";
        }
    });
    
    let content = element.querySelector('p');
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}


function toggleExcelCourse() {
    var content = document.getElementById("course-content");
    var icon = document.getElementById("course-toggle-icon1");
    if (content.style.display === "block") {
        content.style.display = "none";
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
    } else {
        content.style.display = "block";
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
    }
}


function toggleSqlCourse() {
    var content = document.getElementById("course-content-sql");
    var icon = document.getElementById("course-toggle-icon2");
    if (content.style.display === "block") {
        content.style.display = "none";
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
    } else {
        content.style.display = "block";
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
    }
}

function togglePythonCourse() {
    var content = document.getElementById("course-content-python");
    var icon = document.getElementById("course-toggle-icon3");
    if (content.style.display === "block") {
        content.style.display = "none";
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
    } else {
        content.style.display = "block";
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
    }
}

function togglePowerBICourse() {
    var content = document.getElementById("course-content-powerbi");
    var icon = document.getElementById("course-toggle-icon4");
    if (content.style.display === "block") {
        content.style.display = "none";
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
    } else {
        content.style.display = "block";
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
    }
}

function toggleBACourse() {
    var content = document.getElementById("course-content-ba");
    var icon = document.getElementById("course-toggle-icon5");
    if (content.style.display === "block") {
        content.style.display = "none";
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
    } else {
        content.style.display = "block";
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
    }
}

// Analytical skills 

document.addEventListener("DOMContentLoaded", () => {
    const skillSection = document.querySelector(".analytics-skills");
    const skillBoxes = document.querySelectorAll(".skill-box");
    const skillLists = document.querySelectorAll(".skill-list li");
    let currentBoxIndex = 0;

    function revealSkills() {
        if (!skillSection) return;

        // Reveal skill boxes with a shorter delay
        skillBoxes.forEach((box, index) => {
            setTimeout(() => {
                box.classList.add("show-section");
            }, index * 150); // Reduced delay from 300ms to 150ms
        });

        // Reveal skill list items faster
        let delay = 300; // Reduced delay from 500ms to 300ms
        skillLists.forEach((skill, index) => {
            setTimeout(() => {
                skill.style.opacity = "1";
                skill.style.transform = "translateX(0)";
            }, delay + index * 250); // Reduced delay between items

            // Faster highlight toggle
            setInterval(() => {
                skill.classList.toggle("highlight");
            }, 1500 + index * 400); // Reduced interval from 2000ms
        });

        // Automatically swap skill boxes for small screens
        if (window.innerWidth <= 768) {
            swapSkillBoxes();
        }
    }

    function swapSkillBoxes() {
        setInterval(() => {
            skillBoxes.forEach((box) => box.classList.remove("active"));
            skillBoxes[currentBoxIndex].classList.add("active");
            currentBoxIndex = (currentBoxIndex + 1) % skillBoxes.length;
        }, 2000); // Reduced swap interval from 3000ms to 2000ms
    }

    // Run the revealSkills function immediately on page load
    revealSkills();
});

// Mentors
document.addEventListener("DOMContentLoaded", function() {
    const mentorCards = document.querySelectorAll(".mentor-card");

    mentorCards.forEach(card => {
        card.addEventListener("click", function() {
            this.classList.toggle("flipped");
        });
    });
});

// Pricing
document.addEventListener("DOMContentLoaded", function () {
    let steps = document.querySelectorAll(".unique-step");
    let line = document.querySelector(".unique-line");
    let totalSteps = steps.length;
    let currentStep = 0;

    function animateStep() {
        if (currentStep < totalSteps) {
            let progress = ((currentStep + 1) / totalSteps) * 100;
            line.style.width = `${progress}%`;

            // Activate the current step circle
            setTimeout(() => {
                steps[currentStep].classList.add("active");
            }, 1800); // Slight delay before showing circle

            // Change last segment to green dashed
            if (currentStep === totalSteps - 2) {
                setTimeout(() => {
                    line.classList.add("green-dash");
                }, 2000);
            }

            // Make the final step green
            if (currentStep === totalSteps - 1) {
                steps[currentStep].classList.add("final");
            }

            currentStep++;
            setTimeout(animateStep, 2000); // Wait 2 seconds before moving
        }
    }

    setTimeout(animateStep, 500);
});

// Scholarship popup

document.addEventListener("DOMContentLoaded", function () {
    const scholarshipLinks = document.querySelectorAll(".scholarships");

    scholarshipLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Create a modal container
            const modal = document.createElement("div");
            modal.classList.add("scholarship-modal");

            // Create modal content with an iframe to load the scholarship page
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-btn">&times;</span>
                    <iframe src="scholarship.html" frameborder="0"></iframe>
                </div>
            `;

            document.body.appendChild(modal);

            // Close modal on button click
            modal.querySelector(".close-btn").addEventListener("click", function () {
                modal.remove();
            });

            // Close modal when clicking outside content
            modal.addEventListener("click", function (event) {
                if (event.target === modal) {
                    modal.remove();
                }
            });
        });
    });
});