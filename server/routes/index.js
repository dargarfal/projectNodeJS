const express = require('express');
const router = express.Router();

//Nos traemos los modelos para poder interactual via Sequelize
const Viaje = require('../models/Viajes');
const Testimonio = require('../models/Testimoniales');

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

  router.get("/viajes", (req, res) => { //Definimos ruta para Viajes
    Viaje.findAll()
      .then(viajes => res.render("viajes", {
        pagina: 'Proximos viajes',
        viajes: viajes
      }))
      .catch(error => console.log(error))
  });

  router.get("/viajes/:id", (req, res) => { //definimos ruta para detalles del viaje
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

  router.get("/testimoniales", (req, res) => { //Definimos ruta para Testimoniles
    Testimonio.findAll()
      .then(testimoniales => res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales : testimoniales
      }))
  });

  router.post("/testimoniales", (req, res) => {
    //validar que todos los campos esten llenos
    let {nombre, correo, mensaje} = req.body; //El destructuring se aplica por los nombre del atributo "name del  campo en el formulario de origen"

    let errores = [];
    if(!nombre){
      errores.push({'mensaje': 'Agrega tu nombre'})
    }

    if(!correo){
      errores.push({'mensaje': 'Agrega tu correo'})
    }

    if(!mensaje){
      errores.push({'mensaje': 'Agrega tu mensaje'})
    }

    //revisar por errores
    if(errores.length > 0){
      //muestra la vista con errroes
      res.render('testimoniales', {
        errores,
        nombre,
        correo,
        mensaje
      })
    }
    else{
      Testimonio.create({
        nombre,
        correo,
        mensaje
      })
      .then(testimonial => res.redirect('/testimoniales'))
      .catch(error => console.log('error'))

    }
  })

  return router;
}