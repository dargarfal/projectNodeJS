const Testimonio = require('../models/Testimoniales');

exports.allTestimoniales = async (req, res) => { //Definimos ruta para Testimoniles
  const testimoniales = await Testimonio.findAll();
  
  res.render('testimoniales', {
    pagina: 'Testimoniales',
    testimoniales : testimoniales
  })
}

exports.createTestimonio = async (req, res) => {
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
    const testimoniales = await Testimonio.findAll();
    
    res.render('testimoniales', {
      errores,
      nombre,
      correo,
      mensaje,
      pagina : 'Testimoniales',
      testimoniales
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
}