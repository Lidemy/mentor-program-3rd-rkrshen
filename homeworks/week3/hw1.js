function stars(n) {
  const arr = [];
  let star = '';
  if ( n > 0 && n < 30 ) {
    for ( let i = 1; i <= n; i += 1 ) {
      star += '*';
      arr.push(star)
    }
    return arr;
  }
}

module.exports = stars;
