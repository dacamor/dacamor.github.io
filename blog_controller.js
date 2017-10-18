const storedBlogPosts = JSON.parse(localStorage.getItem("blogPosts"))

const blogSectionElement = document.getElementById("blogPostsSection")


for (let i = 0; i < storedBlogPosts.length; i++) {
	let post = storedBlogPosts[i];

	blogSectionElement.innerHTML += `
	<h4> ${post.articleName}</h4>
	<article>${post.articleContents}</article>
	`
}