const request = require('request');

request('https://lidemy-book-store.herokuapp.com/books?_limit=10', (error, response, body) => {
  const ans = JSON.parse(body);
  for (let i = 0; i < ans.length; i += 1) {
    console.log(ans[i].id, ans[i].name);
  }
});
