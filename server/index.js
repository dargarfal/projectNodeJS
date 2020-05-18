//Importar express
const express = require("express"); //importamos Express
const path = require('path'); //Importamos path para el manejo de las rutas dentro del proyecto
const routes = require('./routes'); 


//Configurar Express
const app = express();

//Habilitar pug
app.set('view engine', 'pug'); //Definimos Template Engine a utlizar

//Añadir las vistas
app.set('views', path.join(__dirname, './views')); //Definimos donde encontrar las vistas

//Cargando rutas
app.use('/', routes());

app.listen(3000);
