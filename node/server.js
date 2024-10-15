const http = require("http");
require("dotenv").config();
const port = process.env.PORT || 3000;

console.log(`Server yo ser`);

const server = http.createServer((req, res) => {
  console.log(`Server Montado`);
  //   res.end(`<h1>Hola Mundo 2024</h1>`);
  let respHtml = `
  <html>
    <head>
        <title>Ejemplo de Server</title>
    </head>
    <body>
        <h1>Estoy montando el fucking Servidor con HTTP</h1>
        <h2>Usando las Variables de entorno bien usada ${port}</h2>
    </body>
  </html>
  `;
  res.end(respHtml);
});

server.listen(port /* 0 */, () => {
  //   console.log(`http://localhost:${server.address().port}`);
  console.log(`Escuchando por puerto ${port}`);
  console.log(`http://localhost:${port}`);
});
