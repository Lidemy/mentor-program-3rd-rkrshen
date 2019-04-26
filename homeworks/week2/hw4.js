function printFactor(n) {
  const factors = [];
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  console.log(factors);
}

printFactor(10);
