// Assignment code here
var upperCs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCs = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var splChars = "!#%$&'()*+,-./:;<=>?@[\]^_`{|}~";
var passwordlgth;
var uppercaseCheck = false;
var numberCheck = false;
var splCheck = false;

// functions that will guide password length
function pwLength () {
  passwordlgth = prompt("Select password length (must be between 8-128 characters");

  if (passwordlgth < 8) {
    alert("Password minimum is 8 characters long");
    pwLength();
  }
  else if (passwordlgth > 128) {
    alert("password cannot be more than 128 characters")
    pwLength();
  }
  else { 
alert("Select character types")
    return passwordlgth;

  }
}


// function will ask end user if they want upper case letters, numbers and special characters
function uppercase() {
  uppercaseCheck = confirm("Do you want to include uppercase letters?");
  return uppercaseCheck;
}
 function determineNumbers() {
   numberCheck = confirm("Do you want include numbers?")
  return numberCheck;
 }
 function determineSpecial(){
   splChars = confirm("Do you want to include special characters?")
   return splChars;
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
