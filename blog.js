const blogPosts = [
    {
        "articleName": "Article One",
        "articleContents": "<insert very deep blog post here>"
    }
]

const blogPostsString = JSON.stringify(blogPosts)
localStorage.setItem("blogPosts", blogPostsString)