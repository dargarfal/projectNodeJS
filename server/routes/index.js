const express = require('express');
const router = express.Router();

const Viaje = require('../models/Viajes');

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

  router.get("/viajes", (req, res) => { //Definimos ruta para Inicio
    Viaje.findAll()
      .then(viajes => res.render("viajes", {
        pagina: 'Proximos viajes',
        viajes: viajes
      }))
      .catch(error => console.log(error))
  });

  router.get("/viajes/:id", (req, res) => { //Definimos ruta para Inicio
    Viaje.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(viaje => res.render("viaje", {
        viaje : viaje
      }))
      .catch(error => console.log(error))

  });

  return router;
}