// Initialize vote counts
let votes = {
    JavaScript: 0,
    Python: 0,
    Java: 0,
    "C++": 0
};

// Function to handle voting
function vote(language) {
    // Increment the selected language's vote count
    votes[language]++;
    alert("Thanks For Voting .!Your Vote Has Been Succesfully Submitted");
    
    // Update results display
    displayResults();
}

// Function to display the results
function displayResults() {
    const resultList = document.getElementById("resultList");
    resultList.innerHTML = "";

    // Iterate through the votes object and display each vote count
    for (let language in votes) {
        let listItem = document.createElement("li");
        listItem.textContent = `${language}: ${votes[language]} votes`;
        resultList.appendChild(listItem);
    }
}

// Initial display of results
displayResults();
