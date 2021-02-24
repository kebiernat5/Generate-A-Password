// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  console.log("Inside generate password function")
  return "this is the password we will generate"
}

function passwordOptions(){
  var passwordLength = prompt("How long do you want your password to be? Password must be between 8 and 128 characters long.")
  console.log(passwordLength);
  var passwordText1 = confirm("Password must include lowercase characters.")
  console.log(passwordText1);
  var passwordText2 = confirm("Password must include uppercase characters.")
  console.log(passwordText2);
  var passwordNumbers = confirm("Password must include numeric values.")
  console.log(passwordNumbers);
  var passwordSpecialCharacters = confirm("Password must include special characters")
  console.log(passwordSpecialCharacters);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
