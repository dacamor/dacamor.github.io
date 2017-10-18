const contactInfo = [
    {
        "articleName": "Facebook",
		"link": "http://www.facebook.com",
		"imgLink": "https://www.marioncityschools.org/uploaded/Rushmore/facebook-icon-preview-200x200.png"
    },
    {
        "articleName": "Twitter",
		"link": "http://www.twitter.com",
		"imgLink": "https://cdn0.iconfinder.com/data/icons/Social_Network_Icons_gloss/200/Twitter-px.png"
    }
]

const contactInfoString = JSON.stringify(contactInfo)
localStorage.setItem("contactInfo", contactInfoString)