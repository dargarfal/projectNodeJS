//Importar express
const express = require("express"); //importamos Express
const path = require('path'); //Importamos path para el manejo de las rutas dentro del proyecto
const routes = require('./routes'); 

const configs = require('./config');

//Configurar Express
const app = express();

//Habilitar pug
app.set('view engine', 'pug'); //Definimos Template Engine a utlizar

//Añadir las vistas
app.set('views', path.join(__dirname, './views')); //Definimos donde encontrar las vistas

//Cargar una carpeta estatica  public/
app.use(express.static('public'));

//Valiadar si estamos en Desarrollo o Produccion
const config = configs[app.get('env')];

//creamos la variable para el sitio web
app.locals.titulo = config.nombresitio;

//Muestra el año actual
app.use((req, res, next) => {
  //crear nueva fecha
  const fecha = new Date();
  res.locals.fechaActual = fecha.getFullYear();
  //console.log(res.locals);
  return next();
})

//Cargando rutas
app.use('/', routes());

app.listen(3000);
