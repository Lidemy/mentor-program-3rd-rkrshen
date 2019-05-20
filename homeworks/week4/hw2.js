const request = require('request');
const process = require('process');

const num = parseInt(process.argv[3], 10);
if (process.argv[2] === 'list') {
  request('https://lidemy-book-store.herokuapp.com/books', (error, response, body) => {
    const ans = JSON.parse(body);
    for (let i = 0; i < 20; i += 1) {
      console.log(ans[i].id, ans[i].name);
    }
  });
}
if (process.argv[2] === 'read') {
  request(`https://lidemy-book-store.herokuapp.com/books/${num}`, (error, response, body) => {
    const ans = JSON.parse(body);
    console.log(ans.id, ans.name);
  });
}
