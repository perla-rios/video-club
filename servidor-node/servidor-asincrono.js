const http = require('http');
const fs = require('fs');

const HOST = '127.0.0.1';
const PORT = 3002;

const servidor = http.createServer((req, res) => {
    fs.readFile('mensaje.txt', 'utf8', (error, contenido) => {
        if (error) {
            console.error('Error al leer el archivo:', error.message);

            res.writeHead(500, {
                'Content-Type': 'text/plain; charset=utf-8'
            });

            res.end('Error al leer el archivo.');
            return;
        }

        res.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf-8'
        });

        res.end(contenido);
    });
});

servidor.listen(PORT, HOST, () => {
    console.log(
        'Servidor asincrono ejecutandose en http://' + HOST + ':' + PORT
    );
});