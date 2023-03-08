
// Assignment Code
var generateBtn = document.querySelector("#generate");

// this function loops through criteria to create password
function generatePassword(){

  var pass= "";

  // password criteria 
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '1234567890';
  var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  // Password container
  var passwordContainer = "";

  // prompts to confirm variables
  var passwordLength = prompt("What is the length of the password? Note: length of at least 8 characters and no more than 128 characters");
  var lowerCaseYN = confirm("Click ok to confirm whether or not to include lowercase letters.");
  var upperCaseYN = confirm("Click ok to confirm whether or not to include uppercase letters.");
  var numbericYN = confirm("Click ok to confirm whether or not to include numeric characters.");
  var specialCharsYN = confirm("Click ok to confirm whether or not to include special characters.");

  // confirm password length meets required specs
  if (passwordLength < 8 || passwordLength > 128){
    alert("Eek! Password must be between 8 and 128 characters.");
    return
  }

  console.log(passwordLength);

  // if variables are confirmed Y add them to the pw container
  if (lowerCaseYN){
    passwordContainer = passwordContainer.concat(lowerCase);
  }
  if (upperCaseYN){
    passwordContainer = passwordContainer.concat(upperCase);
  }
  if (numbericYN){
    passwordContainer = passwordContainer.concat(numbers);
  }
  if (specialCharsYN){
    passwordContainer = passwordContainer.concat(numbers);
  }

  // alert if user does not select a variable 
  if (passwordContainer.length === 0) {
    alert("ALERT: Atleast one character type should be selected.");
  }

  // loop starting at 0 and incrementing by 1 till reaching selected password length
  for (var i = 0; i <= passwordLength; i++){
    var pass;

    // generate rand number that is equal to or less than passwordContainer length
    var randomNumber = Math.floor(Math.random() * passwordContainer.length + 1);

    // iterate through passwordContainer and pull character at index of # provided by randomNumber
    pass += passwordContainer.charAt(randomNumber)
    console.log(pass);
  } 
  // exit function
  return pass;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

