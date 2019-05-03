function add(a, b) {
  const numA = [];
  const numB = [];
  for (let i = 0; i < a.length; i += 1) {
    numA.push(Number(a[i]));
  }
  for (let i = 0; i < b.length; i += 1) {
    numB.push(Number(b[i]));
  }
  numA.reverse();
  numB.reverse();
  if (a.length > b.length) {
    for (let i = 0; i < a.length - b.length; i += 1) {
      numB.push(0);
    }
  } else {
    for (let i = 0; i < b.length - a.length; i += 1) {
      numA.push(0);
    }
  }
  numA.push(0);
  numB.push(0);
  const sum = [];
  let count = 0;
  for (let i = 0; i < numA.length; i += 1) {
    count = numA[i] + numB[i];
    if (count > 9) {
      sum[i] = count - 10;
      numA[i + 1] += 1;
    } else {
      sum[i] = count;
    }
  }
  sum.reverse();
  if (sum[0] === 0) {
    return sum.slice(1).join('');
  }
  return sum.join('');
}
console.log(add('11111', '987654321'));
module.exports = add;
