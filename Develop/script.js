
// Assignment Code
var generateBtn = document.querySelector("#generate");

// this function loops through criteria to create password
function generatePassword(){

  var pass= "";

  // password criteria 
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '1234567890';
  var symbols = '!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"';

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

