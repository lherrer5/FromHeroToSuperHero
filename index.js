const fetchApi= require('./api')
fetchApi('https://rickandmortyapi.com/api/character/')
.then(data=>console.log(data))