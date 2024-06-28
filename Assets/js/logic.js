// const themeToggle for theme toggle button and body for html body
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
// if-else statement function to switch between themes whenever theme toggle button is clicked
themeToggle.addEventListener('click', function () {
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    }
})
// applied homepage URL to const redirectUrl
const redirectUrl = "http://127.0.0.1:5500/index.html"
// function for back button to redirect to blog homepage
document.getElementById('back').addEventListener('click', function () {
    window.location.href = redirectUrl;
});