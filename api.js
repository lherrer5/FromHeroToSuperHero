const fetchApi= async (url)=>{
    try{
        const respuesta= await fetch(url);
        const personajes= await respuesta.json();
        return personajes
        //return personajes.filter(({ id, name, gender }) => ({id, name,gender})); 
    } catch(error){
        console.log(error)
    }
}

module.exports=fetchApi