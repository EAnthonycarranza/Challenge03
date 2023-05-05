// Assignment Code
var generateBtn = document.querySelector("#generate");

// Helper function to get user confirmation for character types
function getRandom(message) {
  return confirm(message) ? 1 : 0;
}

// Function to generate a password based on user-selected criteria
function generatePassword() {
  // Prompt user for password length and validate input
  var passwordLength = parseInt(prompt("Enter password length (between 8 and 128 characters):"));

  // Check if the input is not a number
  if (isNaN(passwordLength)) {
    alert("Invalid input. Enter a number for password length (between 8 and 128 characters).");
    return;
  }

  // Check if the password length is less than 8 characters
  if (passwordLength < 8) {
    alert("Password length is too short. Enter a password length between 8 and 128 characters.");
    return;
  }

  // Check if the password length is more than 128 characters
  if (passwordLength >128) {
    alert("Password length is too long. Enter a password length between 8 and 128 characters.");
    return;
  }

  // Prompt user to include character types
  var includeLower = getRandom("Include lowercase characters?");
  var includeUpper = getRandom("Include uppercase characters?");
  var includeNumeric = getRandom("Include numeric characters?");
  var includeSpecial = getRandom("Include special characters?");

  if (!(includeLower || includeUpper || includeNumeric || includeSpecial)) {
    alert("At least one character type should be selected.");
    return;
  }

  // Define character arrays
  var lowerChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', '|', ';', ':', '\'', ',', '.', '/', '<', '>', '?'];

  // Generate the password by randomly selecting characters from the available character arrays
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var chosenArray = [];
    if (includeLower) chosenArray.push(lowerChars);
    if (includeUpper) chosenArray.push(upperChars);
    if (includeNumeric) chosenArray.push(numericChars);
    if (includeSpecial) chosenArray.push(specialChars);

    var selectedArray = chosenArray[Math.floor(Math.random() * chosenArray.length)];
    password += selectedArray[Math.floor(Math.random() * selectedArray.length)];
  }

  // Return the generated password
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
