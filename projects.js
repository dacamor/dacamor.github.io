const projectsInformation = [
        {
            "projectName": "Article One",
            "dateCompleted": "Tommorrow",
            "team": "Me and God",
            "toolsUsed": "my brain.....sorta"
        }
    ]
    
    const projectsInformationString = JSON.stringify(projectsInformation)
    localStorage.setItem("ProjectsInformation", projectsInformationString)