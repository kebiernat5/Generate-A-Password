// var passwordLength = 8-128
// // var finalArr = ['a', 'b', '0', '1', '!', ];
// // finalArr = finalArr.concat(lowercaseArr)
// // Write password to the #password input


// Creates the command to link to the HTML file 
var generateBtn = document.querySelector("#generate");
// console.log(generateBtn)
function generatePassword(){
  return ''
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Defines the arrays for each required text type
var passwordText1 = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var passwordText2 = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var passwordNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var passwordSpecialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "=",
  "_",
  "+",
  "`",
  "~",
  "[",
  "{",
  "]",
  "}",
  ";",
  ":",
  "/",
  "?",
  "'",
];
// Defines the write password function
function writePassword() {
  var options = passwordOptions();
  console.log(options)
  var password = generatePassword(options.length, options.lowercase, options.uppercase, options.numbers, options.special);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// var superArray = passwordText1.concat(passwordText2, passwordNumbers, passwordSpecialCharacters);

// This is where the magic happens. This is where I create the nested "if" statements to generate pulling the numbers from the four different arrays. The function "generatePassword" calls from the 5 arrays, passwordLength, lowercase, uppercase, numbers, and special to create a password.
function generatePassword(
  passwordLength,
  lowercase,
  uppercase,
  numbers,
  special
) {
 var password = ""
//  This variable combines all of the arrays into one array when the user confirms the selection of using that array. If one of the arrays is not chosem, it's not included in the outputted password.
 var superArray = []
  if (special){
    superArray = superArray.concat(passwordSpecialCharacters)
  }
  if (numbers){
    superArray = superArray.concat(passwordNumbers)
  }
  if (lowercase){
    superArray = superArray.concat(passwordText1)
  }
  if (uppercase){
    superArray = superArray.concat(passwordText2)
  }
  
  
  for (var i = 0; i < passwordLength; i++) {
    password += getRandomItem(superArray)
    
  }
  
  // console.log(passwordOptions);
  
  return password;
}
// Retrieve a random item from the provided array and this defines the function of "getRandomItem"
function getRandomItem(arr) {
  // Generate a random index from 0 to the Length -1 of our array
  var randomIndex = Math.random() * arr.length;
  // round down our random index
  randomIndex = Math.floor(randomIndex);
  // returning the random item based off of our random index
  return arr [randomIndex];
}
// This section is how the browser collects the user data. Creating a series of prompts so that the user can either confirm or cancel which types of characters they need to use in their password
function passwordOptions() {
  var passwordLength = prompt(
    "How long do you want your password to be? Password must be between 8 and 128 characters long."
  );

  var passwordLowercase = confirm("Password must include lowercase characters.");

  var passwordUppercase = confirm("Password must include uppercase characters.");

  var passwordNumbers = confirm("Password must include numeric values.");

  var passwordSpecialCharacters = confirm(
    "Password must include special characters"
  );
  // console.log(passwordSpecialCharacters);
  return {
    length: passwordLength,
    uppercase: passwordUppercase,
    lowercase: passwordLowercase,
    special: passwordSpecialCharacters,
    numbers: passwordNumbers,
  }
}


// console.log(getRandomItem(shelter.dogs))

// function passwordOptions(){
//   var passwordLength = prompt("How long do you want your password to be? Password must be between 8 and 128 characters long.")
//   console.log(passwordLength);
//   var passwordText1 = confirm("Password must include lowercase characters.")
//   console.log(passwordText1);
//   var passwordText2 = confirm("Password must include uppercase characters.")
//   console.log(passwordText2);
//   var passwordNumbers = confirm("Password must include numeric values.")
//   console.log(passwordNumbers);
//   var passwordSpecialCharacters = confirm("Password must include special characters")
//   console.log(passwordSpecialCharacters);
// }

// for(var i=0; i<=passwordLength;i++){
//   var passwordLength = 8-128
// console.log(passwordOptions)
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
// // for(var i=0; i<=passwordLength;i++){
//   var passwordLength = 8-128
// console.log(passwordOptions)
// }
