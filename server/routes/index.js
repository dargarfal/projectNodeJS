const express = require('express');
const router = express.Router();

//requerimos los Controllers
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

module.exports = function(){

  router.get("/", homeController.consultasHomepage);
  
  router.get("/nosotros", nosotrosController.infoNosotros);

  router.get("/viajes", viajesController.allViajes);

  router.get("/viajes/:id", viajesController.viajesById);

  router.get("/testimoniales", testimonialesController.allTestimoniales);

  router.post("/testimoniales", testimonialesController.createTestimonio);

  return router;
}