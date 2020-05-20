const express = require('express');
const router = express.Router();

module.exports = function(){

  router.get("/", (req, res) => { //Definimos ruta para Inicio
    res.render("index", {
      pagina: 'Agencia de Viajes'
    });
  });
  
  router.get("/nosotros", (req, res) => { //Definimos ruta para Inicio
    res.render("nosotros", {
      pagina: 'Sobre Nosotros'
    });
  });

  return router;
}