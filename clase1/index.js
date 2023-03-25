//Hago llamado al archivo api.js pasandole la direccion de api escogida
const fetchApi= require('./api')
fetchApi('https://rickandmortyapi.com/api/character/')
//Imprimo el array con los datos q m retorna la promesa (en la forma 1 imprimo en appi.js)
.then(data=>console.log(data))
