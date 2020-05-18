const express = require('express');
const router = express.Router();

module.exports = function(){

  router.get("/", (req, res) => { //Definimos ruta para Inicio
    res.render("index");
  });
  
  router.get("/nosotros", (req, res) => { //Definimos ruta para Inicio
    res.render("nosotros");
  });

  return router;
}