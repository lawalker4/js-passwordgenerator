var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!', '@', '#', '$', '%', "^", '&', '*', '~'];
var lowerCaseArr = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
var upperCaseArr = ['Z', 'X', 'C', 'V', 'B', 'N', 'N', 'M', 'L']
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', "0"]

// Assignment code here
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    //need to call from prompts to generate password
    var correctPrompts = getPrompts();
    var passwordText = document.querySelector("#password");

    if (correctPrompts) {
        var newPassword = generatePassword();
        passwordText.value = newPassword;
    }

}

function generatePassword() {
    //Generate password based on prompts

    var password = "";
    for (var i = 0; i < characterLength; i++) {
        var randomIndex = Math.floor(Math.random() * choiceArr.length);
        password = password + choiceArr[randomIndex];
    }
    return password

}

function getPrompts() {

    var choiceArr = [];


    characterLength = parseInt(prompt("Home many characters do you wnt your password to be? (8-128 characters"));

    if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
        alert("Character length must be a number 8-128. Try Again!");
        return false;
    }

    if (confirm("Would you like special characters in your new password?")) {
        choiceArr = choiceArr.concat(specialCharArr);
    }

    if (confirm("Would you like lower case letters in your new password?")) {
        choiceArr = choiceArr.concat(lowerCaseArr);
    }

    if (confirm("Would you like upper case letters in your new password?")) {
        choiceArr = choiceArr.concat(upperCaseArr);
    }
    if (confirm("Would you like numbers in your new password?")) {
        choiceArr = choiceArr.concat("numberArr");

    }
    return true;
}

