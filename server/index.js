//Importar express
const express = require("express"); //importamos Express
require('dotenv').config();// Requerimos "dotenv" para definir y configuarar las var de entorno
const path = require('path'); //Importamos path para el manejo de las rutas dentro del proyecto
const routes = require('./routes'); 
const bodyParser = require('body-parser'); //Requerimos el body-parser


const configs = require('./config');

//Configurando la Base de Datos ---------------------------------------
const db = require('./config/database');

db.authenticate()
  .then(() => console.log('DB conectada...'))
  .catch(error => console.log(error));

//Configurar Express --------------------------------------------------
const app = express();

//Habilitar pug -------------------------------------------------------
app.set('view engine', 'pug'); //Definimos Template Engine a utlizar

//Añadir las vistas ---------------------------------------------------
app.set('views', path.join(__dirname, './views')); //Definimos donde encontrar las vistas

//Cargar una carpeta estatica  public/ --------------------------------
app.use(express.static('public'));

//Valiadar si estamos en Desarrollo o Produccion ----------------------
const config = configs[app.get('env')];

//creamos la variable para el sitio web -------------------------------
app.locals.titulo = config.nombresitio;

//Muestra el año actual -----------------------------------------------
app.use((req, res, next) => {
  //crear nueva fecha
  const fecha = new Date();
  res.locals.fechaActual = fecha.getFullYear();
  res.locals.ruta = req.path; //req.pat nos retorna la ruta en la que se enuentra Ex: /ruta
  //console.log(res.locals);
  return next();
})

//ejecutamos el body-parser
app.use(bodyParser.urlencoded({extended: true}));

//Cargando rutas -----------------------------------------------------
app.use('/', routes());

//Corriendo el servidor----------------------------------------------
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000; //Traemos el puerto desde el fichero ".env"
app.listen(PORT, HOST, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
