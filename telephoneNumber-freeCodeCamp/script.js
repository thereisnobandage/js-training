function validateNumber() {
  const userInput = document.getElementById("user-input").value;
  const resultsDiv = document.getElementById("results-div");

  const cleanedNumber = userInput.replace(/[^\d()\- ]/g, "");

  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  if (userInput === "") {
    alert("Please provide a phone number");
  } else {
    const resultMessage = regex.test(cleanedNumber)
      ? `Valid US number: ${userInput}`
      : `Invalid US number: ${userInput}`;

    const newResultDiv = document.createElement("div");
    newResultDiv.textContent = resultMessage;

    resultsDiv.insertBefore(newResultDiv, resultsDiv.firstChild);
  }
}

function clearResults() {
  document.getElementById("results-div").textContent = "";
}
