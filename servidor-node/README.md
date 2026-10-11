# Práctica: Creación de servidores con Node.js

## 1. Objetivo

Desarrollar diferentes aplicaciones utilizando Node.js para comprender el funcionamiento básico de JavaScript del lado del servidor, la creación de servidores HTTP, la lectura síncrona y asíncrona de archivos y la implementación de aplicaciones mediante Docker.

## 2. Descripción

En esta práctica se desarrollaron seis etapas: un programa básico de Hola Mundo, un servidor HTTP, un servidor síncrono, un servidor asíncrono, la documentación del proyecto y la implementación de una aplicación mediante Docker.

## 3. Desarrollo

### Etapa 1. Hola mundo básico

Se creó el archivo `hola-mundo.js`, que utiliza `console.log()` para mostrar un mensaje en la terminal.

Comando: `node hola-mundo.js`.

### Etapa 2. Servidor HTTP de Hola Mundo

Se creó el archivo `servidor-http.js` utilizando el módulo `http` de Node.js. El servidor escucha en el puerto 3000 y responde a las solicitudes del navegador con un mensaje de texto.

### Etapa 3. Servidor síncrono

Se creó el archivo `mensaje.txt` y el programa `servidor-sincrono.js`. Se utilizó la función `fs.readFileSync()` para leer el archivo de manera síncrona y enviar su contenido al navegador. El servidor utiliza el puerto 3001.

### Etapa 4. Servidor asíncrono

Se creó el archivo `servidor-asincrono.js`, que utiliza la función `fs.readFile()` para leer el archivo `mensaje.txt` de manera asíncrona. Una vez finalizada la lectura, el servidor envía el contenido al navegador. Esta aplicación utiliza el puerto 3002.

### Etapa 5. Documentación

Se elaboró este archivo README.md para documentar el objetivo, el desarrollo, los archivos y las pruebas de la práctica.

### Etapa 6. Implementación con Docker

Se creó un archivo `Dockerfile` utilizando la imagen base `node:24-alpine`. Durante la construcción de la imagen, se instala Git y se descarga el código del repositorio de GitHub mediante HTTPS. Después, los archivos de la aplicación se copian al directorio de trabajo del contenedor.

Para construir la imagen se utilizó el comando `docker build -t servidor-node .`.

Para ejecutar el contenedor se utilizó el comando `docker run --rm servidor-node`.

Se comprobó que la aplicación se ejecutara correctamente dentro del contenedor y mostrara los mensajes esperados en la terminal.

## 4. Archivos del proyecto

* `hola-mundo.js`: programa básico de Hola Mundo.
* `app.js`: aplicación que muestra mensajes en la terminal y se ejecuta dentro del contenedor Docker.
* `servidor-http.js`: servidor HTTP que responde con un mensaje.
* `mensaje.txt`: archivo de texto utilizado en las pruebas.
* `servidor-sincrono.js`: servidor que lee archivos de manera síncrona.
* `servidor-asincrono.js`: servidor que lee archivos de manera asíncrona.
* `README.md`: documentación del proyecto.
* `Dockerfile`: configuración para construir la imagen de Docker.

## 5. Pruebas realizadas

Se ejecutó el programa básico de Node.js y se comprobó su salida en la terminal. Se desarrollaron servidores HTTP para responder solicitudes y enviar el contenido de un archivo de texto. También se construyó una imagen Docker y se ejecutó un contenedor para comprobar el funcionamiento de la aplicación.

## 6. Conclusión

La práctica permitió comprender las funciones básicas de Node.js, la creación de servidores HTTP y las diferencias entre la lectura síncrona y asíncrona de archivos. También permitió practicar el uso de GitHub para alojar el código fuente y Docker para construir una imagen y ejecutar una aplicación dentro de un contenedor.
