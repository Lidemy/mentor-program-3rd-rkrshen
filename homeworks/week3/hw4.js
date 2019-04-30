function isPalindromes(str) {
  let compare = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    compare += str[i];
  }
  if (str === compare) {
    return true;
  }
  return false;
}

module.exports = isPalindromes;
