function isPrime(n) {
  if (n <= 1 || n > 100000) {
    return false;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = isPrime;
