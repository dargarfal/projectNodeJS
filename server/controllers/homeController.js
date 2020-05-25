//Nos traemos los modelos para poder interactual via Sequelize
const Viaje = require('../models/Viajes');
const Testimonio = require('../models/Testimoniales');

exports.consultasHomepage = async (req, res) => { //Definimos ruta para Inicio
  
  const viajes = await Viaje.findAll({ limit: 3 });

  const testimoniales = await Testimonio.findAll({ limit: 3 });

  res.render("index", {
    pagina: 'Próximos Viajes',
    viajes: viajes,
    testimoniales: testimoniales,
    clase: 'home'
  })
}