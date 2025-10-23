const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('login.html', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Arquivo não encontrado');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});