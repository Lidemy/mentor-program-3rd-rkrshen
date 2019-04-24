function reverse(str) {
  let str1 = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    str1 += str[i];
  }
  return str1;
}

reverse('hello');
