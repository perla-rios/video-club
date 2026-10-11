\# Práctica: Creación de servidores con Node.js



\## 1. Objetivo



Desarrollar diferentes aplicaciones utilizando Node.js para comprender el funcionamiento básico de JavaScript del lado del servidor, la creación de servidores HTTP, la lectura síncrona y asíncrona de archivos y la implementación de aplicaciones mediante Docker.



\## 2. Descripción



En esta práctica se desarrollaron varias etapas para conocer las funcionalidades de Node.js. Primero se ejecutó un programa básico que muestra un mensaje en la terminal. Posteriormente, se creó un servidor HTTP capaz de responder solicitudes desde un navegador. Finalmente, se implementaron dos servidores que leen y envían el contenido de un archivo de texto, uno de manera síncrona y otro de manera asíncrona.



\## 3. Desarrollo



\### Etapa 1. Hola mundo básico



Se creó el archivo `hola-mundo.js`, que utiliza la función `console.log()` para mostrar un mensaje en la terminal. El programa se ejecutó mediante el comando `node hola-mundo.js`.



\### Etapa 2. Servidor HTTP de Hola Mundo



Se creó el archivo `servidor-http.js` utilizando el módulo `http` de Node.js. El servidor escucha en la dirección local `127.0.0.1`, en el puerto `3000`, y responde a las solicitudes del navegador con un mensaje de texto.



\### Etapa 3. Servidor síncrono



Se creó el archivo `mensaje.txt` con un texto de prueba y el archivo `servidor-sincrono.js`. Se utilizó la función `fs.readFileSync()` para leer el archivo de manera síncrona y enviar su contenido al navegador. El servidor utiliza el puerto `3001`.



\### Etapa 4. Servidor asíncrono



Se creó el archivo `servidor-asincrono.js`, que utiliza la función `fs.readFile()` para leer el archivo `mensaje.txt` de manera asíncrona. Una vez finalizada la lectura, el servidor envía el contenido al navegador. Esta aplicación utiliza el puerto `3002`.



\### Etapa 5. Documentación



Se elaboró este archivo README.md para describir el objetivo, las etapas, los archivos utilizados y los resultados obtenidos durante el desarrollo de la práctica.



\### Etapa 6. Implementación con Docker



Esta etapa contempla la creación de un archivo `Dockerfile` para preparar la aplicación y ejecutarla dentro de un contenedor. La implementación se documentará una vez realizadas las pruebas correspondientes.



\## 4. Archivos del proyecto



\* `hola-mundo.js`: programa básico de Hola Mundo.

\* `servidor-http.js`: servidor HTTP que responde con un mensaje.

\* `mensaje.txt`: archivo de texto utilizado en las pruebas.

\* `servidor-sincrono.js`: servidor que lee archivos de manera síncrona.

\* `servidor-asincrono.js`: servidor que lee archivos de manera asíncrona.

\* `README.md`: documentación del proyecto.

\* `Dockerfile`: archivo de configuración para construir la imagen de Docker.



\## 5. Pruebas realizadas



Se ejecutó el programa básico y se comprobó su salida en la terminal. También se probaron los servidores HTTP mediante un navegador web, verificando que respondieran con el mensaje esperado y que los servidores síncrono y asíncrono mostraran el contenido del archivo de texto.



Las evidencias de estas pruebas se guardaron mediante capturas de pantalla.



\## 6. Conclusión



La práctica permitió conocer las funciones básicas de Node.js, crear servidores HTTP y comprender la diferencia entre la lectura síncrona y asíncrona de archivos. También permitió practicar la ejecución de aplicaciones desde la terminal y comprobar su funcionamiento mediante un navegador web. La implementación con Docker completará el proceso de preparación y ejecución de la aplicación en un contenedor.

