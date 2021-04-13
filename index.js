const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "!:;,?./§ù^$*µ£¨%=)àç_è-(é&";
const button = document.getElementById("generateButton");
const rangeLength = document.getElementById("display-password-length");

// Selectionne la valeur du range
console.log(rangeLength.value);

//Spread Operator ... Pour avoir tout les élément sur un tour de tableau

const generatePassword = () => {
  let data = [];
  let newPassword = "";
  if (lowercase.checked) {
    data.push(...dataLowercase);
  }
  if (uppercase.checked) {
    data.push(...dataUppercase);
  }
  if (number.checked) {
    data.push(...dataNumbers);
  }
  if (symbols.checked) {
    data.push(...dataSymbols);
  }

  for (let i = 0; i < rangeLength.value; i++) {
    newPassword += data[Math.floor(Math.random() * data.length)];
  }
  passwordOutput.value = newPassword;
};

generatePassword();

// // event listener sur le click fonction + get element
// button.addEventListener("click", () => {
//   generatePassword();
// });

// Sans fonction avec l'id en camelCase
generateButton.addEventListener("click", generatePassword);
