// var passwordLength = 8-128
// // var finalArr = ['a', 'b', '0', '1', '!', ];
// // finalArr = finalArr.concat(lowercaseArr)
// // Write password to the #password input
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)
function generatePassword(){
  return 'Hi my name is Kate'
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
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
function writePassword() {
  var options = passwordOptions();
  console.log(options)
  var password = generatePassword(options.length, options.lowercase, options.uppercase, options.numbers, options.special);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// var superArray = passwordText1.concat(passwordText2, passwordNumbers, passwordSpecialCharacters);

function generatePassword(
  passwordLength,
  lowercase,
  uppercase,
  numbers,
  special
) {
 var password = ""
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
  
  // return "Hello I am the password for placeholder"
    console.log(passwordOptions);
  // }

  console.log("Password text insert here");
  return password;
}

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
  console.log(passwordSpecialCharacters);
  return {
    length: passwordLength,
    uppercase: passwordUppercase,
    lowercase: passwordLowercase,
    special: passwordSpecialCharacters,
    numbers: passwordNumbers,
  }
}

// Retrieve a random item from the provided array
function getRandomItem(arr) {
  // Generate a random index from 0 to the Length -1 of our array
  var randomIndex = Math.random() * arr.length;
  // round down our random index
  randomIndex = Math.floor(randomIndex);
  // returning the random item based off of our random index
  return arr [randomIndex];
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
