const blogPosts = [
    {
        "articleName": "Article One",
        "articleContents": "&ltinsert very deep blog post here&gt"
    },
    {
        "articleName": "Article Two",
        "articleContents": "After the first week of classes, I have found that I am generally very proficient at the coding and am chugging along at learning the syntax!"
    }
]

const blogPostsString = JSON.stringify(blogPosts)
localStorage.setItem("blogPosts", blogPostsString)