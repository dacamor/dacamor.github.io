const workHistory = [
    {
        "startDate": "Past",
        "endDate": "Future",
        "company": "Existence",
        "title": "Basically a god",
        "responsibilities": "be dope af"
    }
]

const workHistoryString = JSON.stringify(workHistory)
localStorage.setItem("workHistory", workHistoryString)