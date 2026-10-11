const net = require('net');

const HOST = '127.0.0.1';
const PORT = 5000;

const server = net.createServer(function (socket) {
    console.log('Cliente conectado');

    socket.write('Bienvenido al servidor TCP de Node.js\n');

    socket.on('data', function (data) {
        const mensaje = data.toString().trim();

        console.log('Mensaje recibido:', mensaje);

        socket.write('Servidor recibio: ' + mensaje + '\n');
    });

    socket.on('end', function () {
        console.log('Cliente desconectado');
    });
});

server.listen(PORT, HOST, function () {
    console.log('Servidor TCP escuchando en ' + HOST + ':' + PORT);
});

server.on('error', function (error) {
    console.error('Error del servidor:', error.message);
});