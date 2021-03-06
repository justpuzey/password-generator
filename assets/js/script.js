//Assignment code here
var specialChar = ["!", "\”", "#", "$", "%", "&", "’", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var includedCount = 0;
var password = "";

var generatePassword = function () {

  password = "";

  var allIncluded = [];
  //prompt for length of password.

  var charNumber = window.prompt("What is the desired length of the password? (must be between 8-128 characters)")

  //Loop until # of characters selected is between 8 and 128
  // typeof != 'number'
  if (charNumber < 8 || charNumber > 128) {
    window.alert("Please add valid number of characters")
    return generatePassword();
  }

  //prompt for character types to include in password. 
  var includeUpper = window.confirm("Would you like to include uppercase letter?");
  if (includeUpper) {
    includeType(uppercase);
  }

  var includeLower = window.confirm("Would you like to include lowercase letter?");
  if (includeLower) {
    includeType(lowercase);
  }

  var includenumeric = window.confirm("Would you like to include numbers?");
  if (includenumeric) {
    includeType(numeric);
  }

  var includeSpecial = window.confirm("Would you like to include special characters?");
  if (includeSpecial) {
    includeType(specialChar);
  }

  //Pass selected array to include in password
  function includeType(passedArray) {
    password += passedArray[Math.floor(Math.random() * passedArray.length)]; //include at least 1 character in password
    allIncluded = allIncluded.concat(passedArray); //if type is include, add all characters to array for further inclusion
    includedCount++;
  }

  //populate remaining characters in password using random selections from 'allIncluded' array
  for (i = includedCount; i < charNumber; i++) {
    password += allIncluded[Math.floor(Math.random() * allIncluded.length)];
  }

  //return password
  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



