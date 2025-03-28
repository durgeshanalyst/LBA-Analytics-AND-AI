const blogs = [
    { title: "Understanding SQL Joins", image: "https://source.unsplash.com/600x400/?tech", text: "SQL joins help combine tables based on related columns." },
    { title: "Top 5 Data Analytics Tools", image: "https://source.unsplash.com/600x400/?data", text: "Explore the most used tools for data analytics in 2025." },
    { title: "How to Transition into Data Analytics", image: "https://source.unsplash.com/600x400/?career", text: "A complete roadmap for a successful data analytics career switch." }
];

const blogGrid = document.getElementById("blogGrid");
const blogModal = document.getElementById("blogModal");
const blogTitle = document.getElementById("blogTitle");
const blogImage = document.getElementById("blogImage");
const blogText = document.getElementById("blogText");

function displayBlogs() {
    blogs.forEach((blog, index) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");
        blogCard.innerHTML = `<img src="${blog.image}" alt="${blog.title}"><h3>${blog.title}</h3>`;
        blogCard.onclick = () => openModal(index);
        blogGrid.appendChild(blogCard);
    });
}

function openModal(index) {
    blogTitle.innerText = blogs[index].title;
    blogImage.src = blogs[index].image;
    blogText.innerText = blogs[index].text;
    blogModal.style.display = "flex";
}

function closeModal() {
    blogModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === blogModal) {
        closeModal();
    }
};

displayBlogs();


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
