import './sass/main.scss';
// $ API_KEY=<657e1204036643f99a49d71e89406f6a> npm test

// const NewsAPI = require('newsapi');


// const reqOptions = {
//   corsProxyUrl: 'https://cors-anywhere.herokuapp.com/',
// };

// const newsapi = new NewsAPI('657e1204036643f99a49d71e89406f6a', reqOptions);


const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const qInTitle = 'cat';
const apiKey = '657e1204036643f99a49d71e89406f6a';
const url = `${proxyUrl}https://newsapi.org/v2/everything?qInTitle=${qInTitle}&language=en&apiKey=${apiKey}`;
const request = new Request(url);

fetch(request)
  .then(response => response.json())
  .then(news => {
    console.log(news);
  })
  .catch(error => {
    console.log(error);
  });
