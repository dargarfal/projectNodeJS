const Viaje = require('../models/Viajes');

exports.allViajes = async (req, res) => { //Definimos ruta para Viajes
  const viajes = await Viaje.findAll();
      
    res.render("viajes", {
      pagina: 'Proximos viajes',
      viajes: viajes
    })
  }
    


exports.viajesById = async (req, res) => { //definimos ruta para detalles del viaje
  const viaje = await Viaje.findOne({
    where: {
      id: req.params.id
    }
  });
  
  res.render("viaje", {
    viaje : viaje
  })

}