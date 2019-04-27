function join(arr, concatStr) {
  let newStr = '';
  for (let i = 0; i < (arr.length - 1); i += 1) {
    newStr += arr[i] + concatStr;
  }
  if (arr.length <= 1) {
    newStr += arr[arr.length - 1] + concatStr;
  } else {
    newStr += arr[arr.length - 1];
  }
  return newStr;
}

function repeat(str, times) {
  let newStr = '';
  for (let i = 1; i <= times; i += 1) {
    newStr += str;
  }
  return newStr;
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
