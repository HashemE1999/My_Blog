// tutor helped design the following code
const username = document.getElementById("username");
const title = document.getElementById("title");
const content = document.getElementById("content");
const form = document.getElementById("blog-form");

form.addEventListener("submit", function (event) {
  // prevent the page from refreshing when a submit event is triggered
  event.preventDefault();

  const blogpost = {
    username: username.value,
    title: title.value,
    content: content.value,
  };

//   trying to retireve the blogposts from LS
  let blogposts = JSON.parse(localStorage.getItem("blogposts"));

/**
 *    if they don't exist, give them a value of an empty array
 *  store that array in ls
 *  add the new blog post to the array of posts
 *  overwrite the array in LS with the new array containing the latest blog post
 */
  if (blogposts === null) {
    blogposts = [];
  }

  blogposts.push(blogpost)
  localStorage.setItem("blogposts", JSON.stringify(blogposts));
});

// const redirectUrl to apply to URL for blog post page
const redirectUrl = "http://127.0.0.1:5500/blog.html"
// function to redirect to redirectUrl upon clicking the submit button on the homepage
document.getElementById('submit').addEventListener('click', function () {
    window.location.href = redirectUrl;
});