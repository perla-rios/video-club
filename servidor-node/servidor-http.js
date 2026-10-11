
const http = require('http');

const HOST = '127.0.0.1';
const PORT = 3000;

const servidor = http.createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
res.end('Hola mundo desde mi servidor HTTP con Node.js!');
});

servidor.listen(PORT, HOST, () => {
console.log('Servidor HTTP ejecutandose en http://' + HOST + ':' + PORT);
});