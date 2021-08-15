// Assignment code here
var upperCs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCs = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var splChars = "!#%$&'()*+,-./:;<=>?@[\]^_`{|}~";
var passwordLgth;
var uppercaseCheck = false;
var numberCheck = false;
var splCheck = false;

// functions that will guide password length
function pwLength () {
  passwordLgth = prompt("Select password length (must be between 8-128 characters)");

  if (passwordLgth < 8) {
    alert("Password minimum is 8 characters long");
    pwLength();
  }
  else if (passwordLgth > 128) {
    alert("password cannot be more than 128 characters")
    pwLength();
  }
  else { 
alert("Select character types")
    return passwordLgth;

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
   splCheck = confirm("Do you want to include special characters?")
   return splCheck;
 }

//  create function to generate password 

function generatePassword(){
  pwLength();
  uppercase();
  determineNumbers();
  determineSpecial();

  var characters = lowerCs;
    var password = "";
    if (!uppercaseCheck && !numberCheck && !splCheck) {
        return;

    } 
    if (uppercaseCheck) {
        characters += upperCs 
;

    } 
     if (numberCheck) {
        characters += numbers;
;

    } if (uppercaseCheck) {
        characters += upperCs;
;
    }

     
    if (splCheck) {
        characters += splChars;

    } 

    for (var i = 0; i < passwordLgth; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;




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
