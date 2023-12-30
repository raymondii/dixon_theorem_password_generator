let generateBtn = document.querySelector("#generate");

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  let password = "";
  let passwordLength = getPasswordLength();
  let wantsLowercase = confirm("Do you want to include lowercase letters?");
  let wantsUppercase = confirm("Do you want to include uppercase letters?");
  let wantsNumbers = confirm("Do you want to include numbers?");
  let wantsSpecialChar = confirm("Do you want to include special characters?");

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChar = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let charSet = "";

  if (wantsLowercase) {
    charSet += lowercase;
  }

  if (wantsUppercase) {
    charSet += uppercase;
  }

  if (wantsNumbers) {
    charSet += numbers;
  }

  if (wantsSpecialChar) {
    charSet += specialChar;
  }

  if (charSet.length === 0) {
    alert("Please select at least one character type.");
    return "";
  }

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  return password;
}

function getPasswordLength() {
  let passwordLength = 0;

  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = parseInt(prompt("Please provide a password length (between 8 and 128 characters)"));
  }

  return passwordLength;
}

generateBtn.addEventListener("click", writePassword);