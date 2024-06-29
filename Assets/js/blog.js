// applied homepage URL to const redirectUrl
const redirectUrl = "http://127.0.0.1:5500/index.html"
// function for back button to redirect to blog homepage
document.getElementById('back').addEventListener('click', function () {
    window.location.href = redirectUrl;
});

