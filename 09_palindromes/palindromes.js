const palindromes = function (string) {
  const newString = Array.from(string)
    .filter(char => "0123456789abcdefghijklmnopqrstuvwxyz".includes(char.toLowerCase()))
    .map(char => char.toLowerCase());
  for (let i = 0; i < Math.floor(newString.length / 2); i++) {
    if (newString[i] !== newString[newString.length - i - 1]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
