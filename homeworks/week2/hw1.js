function printStars(n) {
  if (n >= 1 && n <= 30) {
    for (let i = 0; i < n; i += 1) {
      console.log('*');
    }
  }
}

printStars(31);
