const request = require('request');
const process = require('process');

request('https://lidemy-book-store.herokuapp.com/books?_limit=20', (error, response, body) => {
  const ans = JSON.parse(body);
  if (process.argv[2] === 'list') {
    for (let i = 0; i < 20; i += 1) {
      console.log(ans[i].id, ans[i].name);
    }
  } else if (process.argv[2] === 'read') {
    const no = process.argv[3] - 1;
    console.log(ans[no].id, ans[no].name);
  }
});
