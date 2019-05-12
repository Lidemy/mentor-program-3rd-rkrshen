const request = require('request');
const process = require('process');

const num = parseInt(process.argv[3], 10);
if (process.argv[2] === 'list') {
  request('https://lidemy-book-store.herokuapp.com/books?_limit=20', (error, status, body) => {
    const ans = JSON.parse(body);
    for (let i = 0; i < 20; i += 1) {
      console.log(ans[i].id, ans[i].name);
    }
  });
} else if (process.argv[2] === 'read') {
  request('https://lidemy-book-store.herokuapp.com/books', (error, status, body) => {
    const ans = JSON.parse(body);
    const no = process.argv[3] - 1;
    console.log(ans[no].id, ans[no].name);
  });
} else if (process.argv[2] === 'delete') {
  request.delete(`https://lidemy-book-store.herokuapp.com/books/${num}`);
} else if (process.argv[2] === 'create') {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: {
        name: process.argv[3],
      },
    },
  );
} else if (process.argv[2] === 'update') {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${num}`,
      form: {
        name: process.argv[4],
      },
    },
  );
}
