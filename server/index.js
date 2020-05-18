//Importar express
const express = require("express");

const app = express();
//Configurar Express
app.use("/", (req, res) => {
  res.send("Hola mundo");
});

app.listen(3000);
