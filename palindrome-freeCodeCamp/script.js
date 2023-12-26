function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedStr;
}

function applyStylesToResultDiv(resultDiv) {
  resultDiv.style.border = "2px solid lightgrey";
  resultDiv.style.borderRadius = "10px";
  resultDiv.style.padding = "10px";
  resultDiv.style.marginTop = "20px";
  resultDiv.style.fontFamily = "Arial, sans-serif";
  resultDiv.style.fontSize = "16px";
  resultDiv.style.textAlign = "center";
  resultDiv.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
  resultDiv.style.boxShadow = "2px 2px 4px rgba(0, 0, 0, 0.2)";
}

function checkInput() {
  const inputString = document.getElementById("text-input").value;
  const resultDiv = document.getElementById("result");

  if (inputString === "") {
    alert("Please input a value.");
    return;
  }

  const result = isPalindrome(inputString);

  if (result) {
    resultDiv.innerHTML = `${inputString} is a palindrome.`;
  } else {
    resultDiv.innerHTML = `${inputString} is not a palindrome.`;
  }

  applyStylesToResultDiv(resultDiv);
}
