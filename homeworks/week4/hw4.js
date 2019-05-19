import request from 'request';

request(
  {
    url: 'https://api.twitch.tv/helix/games/top',
    headers: {
      'Client-ID': '3ycpz0pawja1s3b26slgywc1pfcgnh',
    },
  },
  (error, response, body) => {
    const ans = JSON.parse(body);
    for (let i = 0; i < ans.data.length; i += 1) {
      console.log(ans.data[i].id, ans.data[i].name);
    }
  },
);
