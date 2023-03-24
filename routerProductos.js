const express= require('express');
const routerProductos= express.Router();

//Las funciones middleware (q se ejecutan despues de recibir la solicitud y antes d enviar la respuesta),
//m sirve para procesar .body en formato json. OJo va antes de las rutas
//tienen acceso al obj de la solic, al objt de la respuesta y a next()(func q se llama pa ejecutar el prox middleware)
routerProductos.use(express.json());

//Importo productos
const{hombre}=require('./productos').infoPdts;

routerProductos.get('/', (req,res)=>{
    //.send envia la respuesta en formato .json x lo q no es necesario escribir (JSON.stringify(productos))
    //y en vez de .send puedo usar .json q convierte el argumento a este formato antes d enviarlo
    res.send(JSON.stringify(hombre))
});

routerProductos.get('/:name', (req,res)=>{
    const name= req.params.name.toLocaleLowerCase();
    const resultados= hombre.filter(pdto=>pdto.name===name);
    if(resultados.length===0){
        return res.status(404).send(`No se encontraron productos de ${name}`);
    }else{
        res.send(JSON.stringify(resultados));
    }
});

// routerProductos.post('/', (req,res)=>{
//     //deberia validar q si sea formato json
//     //Extraigo el cuerpo de la req con req.body
//     let pdtNuevo=req.body;
//     //lo agrego al arreglo q estoy importando const{productos}, en la realidad seria la base de datos
//     productos.push(pdtNuevo);
//     //envio el nuevo arreglo al cliente
//     res.send(JSON.stringify(productos))
// });

// //PUT para actualizar una entidad (en una base de datos es un "item" q tiene conjunto de propiedades y valores)OJO hay q enviarlas todas, 
// //hasta las q no se van a actualizar
// routerProductos.put('/:id', (req,res)=>{
//     //recibo el curso actualizado
//     const pdtActualizado=req.body;
//     //extraigo id del curso
//     const id=req.params.id;
//     //encuentro el indice de mi id con el metodo findIndex (en la func flecha el 1er id es el del curso y el 2do es el parametro URL que paso arriba desp d put)
//     //NP uso === xq mi id es un numero pero el q m pasa el cliente es una cadena de caracteres 
//     const indice=productos.findIndex(pdto=>pdto.id==id);
//     if(indice>=0){
//         //cojo arreglo del archivo cursos con indice y le asigno el nuevo
//         productos[indice]=pdtActualizado;
//     }else{
//         res.status(404).send();
//     }
//     res.send(JSON.stringify(productos))
// }
// )

// //PACTH: para actualizar solo una pequeña parte de un registro existente
// routerProductos.patch('/:id', (req,res)=>{
//     //recibo la info q voy a actualizar
//     const infoActualizada=req.body;
//     //extraigo id del curso
//     const id=req.params.id;
//     //encuentro el indice 
//     const indice=productos.findIndex(pdto=>pdto.id==id);
//     if(indice>=0){
//         //obtengo el curso q voy a modificar
//         const pdtAmodificar= productos[indice];
//         //uso metodo .assign q m permite adctualizar solo la parte q quiero poniendo el target y 
//         //la clave valor nueva q guardo en info actualizada segun lo q pase el cliente
//         Object.assign(pdtAmodificar, infoActualizada);
//     }
//     res.send(JSON.stringify(productos))
// }
// )

// //DELETE
// routerProductos.delete('/:id', (req,res)=>{
//     //extraigo id del curso a eliminar (no necesita body xq no le voy a "pasar"nada)
//     const id=req.params.id;
//     //encuentro el indice 
//     const indice=productos.findIndex(pdto=>pdto.id==id);
//     if(indice>=0){
//         //con .splice "corto" el indice e indico q sólo elimino 1 elemento (el cortado)
//         productos.splice(indice, 1);
//     }
//     res.send(JSON.stringify(productos))
// }
// )

//Exporto router
module.exports= routerProductos;
