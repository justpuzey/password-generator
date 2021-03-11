//Assignment code here
var specialChar = ["!", ",", "\”", "#", "$", "%", "&", "’", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var all = [];
var password = "";

var generatePassword = function () {
  //prompt for length of password.

  var charNumber = window.prompt("How many characters should the password include? (must be between 8-128)")

  //Loop until # of characters selected is between 8 and 128
  if (charNumber < 8 || charNumber > 128) {
    window.alert("Please add valid number of characters")
    return generatePassword();
  }



  //prompt for character types to include in password. 

  //add all characters from selected arrays to 'all' array

  //pull 1 random from each selected type and add to generated password

  //pull random characters from 'all' array until number of characters complete

  //return password
  return charNumber

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



