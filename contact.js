const contactInformation = [
    {
        "nameOfService": "The Best One",
        "myHandle": "Godlike",
        "URL": "www.lookatthis.com",
        "serviceIcon": "http://www.lovepanky.com/wp-content/uploads/images/2012/08/How-to-be-a-Badass-in-25-Awesomely-Bad-Ways.jpg"
    }
]

const contactInformationString = JSON.stringify(contactInformation)
localStorage.setItem("contactInformation", contactInformationString)