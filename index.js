const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "!:;,?./§ù^$*µ£¨%=)àç_è-(é&";

const generatePassword = () => {
  let data = [];
  if (lowercase.checked) data.push(dataLowercase);
  else if (uppercase.checked) data.push(dataUppercase);
  console.log(data);
};

generatePassword();

// event listener sur le click
