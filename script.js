// Show alert when the page loads
window.onload = function() {
    alert("Welcome to Feeza Kulsoom's Portfolio!");
};

// Change background color when button is clicked
document.getElementById("colorButton").addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomColor();
});

// Function to generate random colors
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 163)];
    }
    return color;
}

// Form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    
    if (name === "" || email === "") {
        alert("Please fill in all fields!");
        event.preventDefault(); // Prevent form submission if fields are empty
    } else {
        alert("Form submitted successfully!");
    }
});
