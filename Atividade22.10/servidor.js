const http = require('http');
const Calculo = require('./calculo');

const server = http.createServer((req, res)=>{
    const resultado = Calculo.Dividir(20, 2);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    if (resultado === null) {
        res.end('Erro: divisão por zero');
    } else {
        res.end(`Resultado da divisão: ${resultado}`);
    }
});

server.listen(3000, () => {
    console.log("Rodando no http://localhost:3000/;");
});