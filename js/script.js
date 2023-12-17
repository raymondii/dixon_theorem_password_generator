let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// generate password and return it with function
function generatePassword() {
  let password = "";
  let passwordlength = +prompt("Please provide a password length");
  let wantsLowercase = true;
  let wantsUppercase = true;
  let wantsNumbers = true;
  let wantsspecialChar = false;

  const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
  let charSet = [];

  if (wantsLowercase) {
    charSet = charSet.concat(lowercase);
  }

  if (wantsUppercase) {
    charSet = charSet.concat(uppercase);
  }

  if (wantsNumbers) {
    charSet = charSet.concat(numbers);
  }

  if (wantsspecialChar) {
    charSet = charSet.concat(specialChar);
  }

  for (let i = 0; i < passwordlength; i++) {
    let ranIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[ranIndex];
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// let password = " ";
// let passwordlength = 77; // change i < lowercase.length to i < password.length

// let wantsLowercase = true;
// let wantsUppercase = true;
// let wantsNumbers = true;
// let wantsspecialChar = false;

// const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// const specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
// let charSet = [];

// // if the user wants lowercase we combine the character set array with lowercase

// if (wantsLowercase) {
//     charSet = charSet.concat(lowercase);
// }

// if (wantsUppercase) {
//     charSet = charSet.concat(uppercase);
// }

// if (wantsNumbers) {
//     charSet = charSet.concat(numbers);
// }

// if (wantsspecialChar) {
//     charSet = charSet.concat(specialChar);
// }



// for (let i = 0; i < password.length; i++) {
//     let ranIndex = Math.floor(Math.random() * charSet.length);
//     password += charSet[ranIndex];
// }

// console.log("Completed Password \n\n", password);

// // let ranIndex = Math.floor(Math.random() * lowercase.length);

// // console.log(ranIndex);

// // for (let i = 0; i < lowercase.length; i++); {
// //     console.log(ranIndex);
// // }


// //Functions - default function is to run some code when they are called () / are reusable / to call it use name of function and ()

// function add(a,b) {
//     console.log(a+b);
// };

// add(10,7);

// function generatePassword() {
//     let password = " ";
// let passwordlength = 77; // change i < lowercase.length to i < password.length

// let wantsLowercase = true;
// let wantsUppercase = true;
// let wantsNumbers = true;
// let wantsspecialChar = false;

// const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// const specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
// let charSet = [];

// // if the user wants lowercase we combine the character set array with lowercase

// if (wantsLowercase) {
//     charSet = charSet.concat(lowercase);
// }

// if (wantsUppercase) {
//     charSet = charSet.concat(uppercase);
// }

// if (wantsNumbers) {
//     charSet = charSet.concat(numbers);
// }

// if (wantsspecialChar) {
//     charSet = charSet.concat(specialChar);
// }



// for (let i = 0; i < password.length; i++) {
//     let ranIndex = Math.floor(Math.random() * charSet.length);
//     password += charSet[ranIndex];
// }

// return password;
// }

// // console.log("Completed Password \n\n", password);
// // };

// generatePassword();