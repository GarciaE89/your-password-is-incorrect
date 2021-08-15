// Assignment code here
var upperCs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCs = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var splChars = "!#%$&'()*+,-./:;<=>?@[\]^_`{|}~";
var passwordlgth;
var




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
