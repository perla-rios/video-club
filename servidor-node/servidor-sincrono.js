const http = require('http');
const fs = require('fs');

const HOST = '127.0.0.1';
const PORT = 3001;

const servidor = http.createServer((req, res) => {
    try {
        const contenido = fs.readFileSync('mensaje.txt', 'utf8');

        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(contenido);
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Error al leer el archivo.');
        console.error('Error al leer el archivo:', error.message);
    }
});

servidor.listen(PORT, HOST, () => {
    console.log('Servidor sincronico ejecutandose en http://' + HOST + ':' + PORT);
});