# Práctica: Servidor TCP con Node.js y Ncat

## 1. Objetivo

Desarrollar un servidor TCP utilizando Node.js para comprender la comunicación entre un servidor y un cliente mediante el protocolo TCP, así como comprobar su funcionamiento utilizando Ncat.

## 2. Descripción

En esta práctica se creó un servidor TCP con el módulo `net` de Node.js. El servidor escucha conexiones en la dirección local `127.0.0.1`, utilizando el puerto `5000`.

Para probar la comunicación, se utilizó Ncat como cliente TCP, lo que permitió establecer una conexión con el servidor, enviar mensajes y recibir respuestas.

## 3. Desarrollo

### 3.1. Creación del servidor

Se creó el archivo `server.js`, que contiene el código necesario para iniciar el servidor TCP.

El servidor realiza las siguientes funciones:

* Escucha conexiones en el puerto 5000.
* Acepta conexiones de clientes.
* Envía un mensaje de bienvenida al conectarse un cliente.
* Recibe y muestra los mensajes enviados por el cliente.
* Responde a los mensajes recibidos.
* Detecta cuando el cliente se desconecta.

### 3.2. Ejecución del servidor

El servidor se ejecutó desde la terminal mediante el siguiente comando:

`node server.js`

Al iniciar correctamente, mostró el mensaje:

`Servidor TCP escuchando en 127.0.0.1:5000`

### 3.3. Conexión con el cliente

Se utilizó Ncat para establecer la conexión TCP con el servidor mediante el siguiente comando:

`ncat 127.0.0.1 5000`

En este equipo fue necesario ejecutar Ncat utilizando la ruta de instalación de Windows.

Una vez establecida la conexión, el servidor envió un mensaje de bienvenida y permitió intercambiar mensajes con el cliente.

### 3.4. Pruebas de comunicación

Se enviaron mensajes desde el cliente y se comprobó que el servidor los recibía y respondía correctamente.

Las pruebas permitieron verificar el funcionamiento de la comunicación TCP entre ambos programas.

## 4. Resultados

El servidor TCP se ejecutó correctamente y aceptó conexiones desde el cliente Ncat.

Se comprobó el envío y la recepción de mensajes entre el cliente y el servidor mediante una conexión TCP local.

## 5. Conclusión

La práctica permitió comprender cómo crear un servidor TCP utilizando Node.js y cómo establecer una conexión con un cliente mediante Ncat.

También se reforzaron los conceptos de comunicación cliente-servidor, uso de puertos y transmisión de mensajes a través del protocolo TCP.
