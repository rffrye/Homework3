// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character Arrays by type
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//console log to test 
  console.log(lowerCase);
  console.log(upperCase);
  console.log(special);
  console.log(number);

//Variables for prompts
var confirmLength = "";
var confirmLower;
var confirmUpper;
var confirmSpecial;
var confirmNumber;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));
    
    if(confirmLength <= 7 || confirmLength >= 129) {
        alert("Password length must be between 8-128 characters. Try again");
        var confirmLength = (prompt("How many characters would you like your password to contain?"));
    } 
    
    else (alert ("Your password will have " + confirmLength + " characters."))

    //parameter confirms chosen by user
    var confirmSpecial = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumber= confirm("Click OK to confirm if you would like to include numeric characters");    
    var confirmLower = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpper = confirm("Click OK to confirm if you would like to include uppercase characters");
  }