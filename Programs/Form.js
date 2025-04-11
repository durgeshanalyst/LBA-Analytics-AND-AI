function openForm() {
    document.getElementById("popupForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

function downloadBrochure() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (!name || !email) {
        alert("⚠️ Please enter your name and email to continue.");
        return;
    }

    // Simulating brochure download (Replace 'brochure.pdf' with the actual path)
    let link = document.createElement("a");
    link.href = "brochure.pdf"; // Change this to your actual brochure file
    link.download = "Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Close the form after downloading
    closeForm();
}
