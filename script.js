


//all variables
const inputField = document.getElementById("text-input");
const result = document.getElementById("result");

//the function to reverse the input
const reverseWord = (word) => {  
  return word.split("").reverse().join("");
};

//check logic
document.getElementById("check-btn").addEventListener("click", function() {
  if (!inputField.value) {
    alert("Please input a value")
  } else {
     switch (inputField.value.replace(/[.,]/g, "").replace(/[\/\\\-\(\)]/g, "_").split(" ").join("").toLowerCase()) {
      case reverseWord(inputField.value):
      result.innerText = `${inputField.value} is a palindrome`;
      break;
      case "_" + reverseWord(inputField.value.slice(1)):
      result.innerText = `${inputField.value} is a palindrome`;
      break;
      case reverseWord(inputField.value.split(" ").join("")):
      result.innerText = `${inputField.value} is a palindrome`
      break;
      case reverseWord(inputField.value.replace(/[.,]/g, "").split(" ").join("").toLowerCase()):
      result.innerText = `${inputField.value} is a palindrome`;
      break;
      case reverseWord(inputField.value.replace(/[-]/g, "_").replace(/[\/\\\-\(\)]/g, "_").split(" ").join("")):
      result.innerText = `${inputField.value} is a palindrome`
      break;
      default:
      result.innerText = `${inputField.value} is not a palindrome`
      break;
    }
  }
  });

  