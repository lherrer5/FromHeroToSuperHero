//FORMA1

// const fetchApi= async (url)=>{
//     try{
//         //Llamo la url de la api en index.js
//         const respuesta= await fetch(url);

//         //Espero hasta recibir mi respuesta en formato .json
//         const personajes= await respuesta.json();

//         //con forEach o filter,voy a devolver solo los datos del obj results 
//         //y para cada personaje, imprimo solo su id, nombre y genero
//         const infoRequerida=  personajes.results.forEach((personaje) => console.log(personaje.id, personaje.name, personaje.gender));
//     } catch(error){
//         console.log(error)
//     }
// }


// module.exports=fetchApi

//FORMA2
const fetchApi= async (url)=>{
    try{
        //Llamo la url de la api en index.js
        const respuesta= await fetch(url);

        //Espero hasta recibir mi respuesta en formato .json
        const personajes= await respuesta.json();

        //voy a devolver solo los datos del obj results y con map() 
        //creo un nuevo array con los personajes desestructurando los datos necesarios
        return  personajes.results.map((personaje) =>`${personaje.id}, ${personaje.name}, ${personaje.gender}`);
        
    } catch(error){
        console.log(error)
    }
}

module.exports=fetchApi
