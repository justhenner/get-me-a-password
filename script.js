// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '1234567890';
var symbols = '!@#$%%^&*()_+=';

var userChoice = ''

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ITEMS BELOW REFER TO LINE 17

// What is generateBtn?

// What is addEventListener?

// What does addEventListener do?

// What parameters does addEventListener take?

// What is a click event?

// What is write password?
