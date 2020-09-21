// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character Arrays by type
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//console log to test 
  console.log("lowercase"[0]);


//Variables for prompts
var confirmLength = "";
var confirmLower;
var confirmUpper;
var confirmSpecial;
var confirmNumber;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));
  if(confirmLength >= 7 || confirmLength <= 128) {
    alert("Password length must be between 8-128 characters. Try again");
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
    }
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
