
const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
const conString = 'postgres://postgres:1234@localhost:5432/postgres';
function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/', function(request, response){
  response.sendFile('index.html', {root: './public'});
});
app.get('/about', function(request, response){
  response.sendFile('index.html', {root: './public'});
});
app.get('/repos', function(request, response){
  response.sendFile('index.html', {root: './public'});
});

app.get('/github/*', proxyGitHub);

app.listen(PORT, function(){
  console.log('Port is', PORT);
});
