const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/', function(request, response){
  response.sendFile('index.html', {root: './public'});
});
app.get('/about', function(request, response){
  response.sendFile('index.html', {root: './public'});
});
app.get('/repos', function(request, response){
  response.sendFile('index.html', {root: './public'});
});

app.listen(PORT, function(){
  console.log('Port is', PORT);
});
