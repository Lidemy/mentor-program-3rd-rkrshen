function alphaSwap(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i].toLowerCase()) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}

module.exports = alphaSwap;
