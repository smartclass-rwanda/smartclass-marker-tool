const path = require('path');
const express = require('express')
const http = require('http')
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.get('/:token', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, 'public/404.html'));
});

server.listen(PORT, ()=> {
  console.log(`Server is listening on port ${PORT}`);
})