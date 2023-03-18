//Importo express
const express= require('express');

//Importo router
const routerProductos=require('./routerProductos')

//Creo mi app con función express()
const app= express();

//Simulo una base de datos con el archivo productos.js y lo importo con sintaxis de desestructuracion
const {infoPdts}= require('./productos');

//Router: Me permiten optimizar codigo reusando parte del path
//Indico uso especifico indicando el camino especifico asociado a mi constante infoPdts
app.use('/api/productos/hombre', routerProductos)

app.get('/', (req,res)=>{
    res.send('Bienvenido a mi sitio')
});

app.get('/api/productos', (req,res)=>{
    res.send(infoPdts)
    //pa enviarlo en formato json: res.send(JSON.stringify(infoPdts))
});

//En la realidad cuando publico mi app en servicio externo, se me asigna el puerto dinamicamente por lo que pa tomar el puerto de las variables de 
// ambiente, uso process.env.port
const PORT= process.env.port||3008;

//la función se corre cuando el servidor empieza a escuchar
//para que mi servidor empiece a escuchar solicitudes, Le especifico el puerto en 1er argumento y 2do funcion flecha q indica q hacer al escuchar 
app.listen(PORT, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}...`);
})
//para poder acceder en el navegador a http://localhost:3008/ debo escribir en terminal node --watch app.js (nombre de archivo q contiene al servidor)
//o en command prompt nodemon app.js para q se actualice automatico con los cambios
//para detener el servidor, en consola ctrl+C
