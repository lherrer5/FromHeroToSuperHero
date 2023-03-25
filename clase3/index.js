//Importo express
const express= require('express');

const PORT= 3000;
const app= express();
//para poder utilizar el .body debo indicarle el uso
app.use(express.json());

const products= [ {
    name: 'reloj',
    price: 100,
    quantity: 2,
    id: 1
},
{
    name: 'correa',
    price: 100,
    quantity: 3,
    id: 2
},
{
    name: 'sombrero',
    price: 1000,
    quantity: 3,
    id: 3
}];

app.get("/",(req, res)=>{
    res.send("Mi app en express")
})

app.get("/api/v1/products",(req, res)=>{
    res.json(products)
})

//lo q va luego de los dos puntos debe ser = nombre en corchetes en const
app.get("/api/v1/products/:productID",(req, res)=>{
    const { productID }= req.params;
    //como la rpta llega en string, lo debo convertir a numero
    const productIDint= parseInt(productID);
    const product= products.find((product)=>product.id===productIDint);
    res.json(product)
})

app.get("/api/v1/products/:id/:price", (req,res)=>{
    const idenfit= req.params.id;
    const precio= req.params.price;
    //no hago verificacion estricta xq se devuelve string y reviso numero
    const resultados= products.filter(articulo=>articulo.price==precio && articulo.id==idenfit);
    if(resultados.length===0){
        return res.status(404).send(`No se encontraron productos de precio ${precio} con idenfiticador ${idenfit}`);
    }
    //se puede imprimir de estas 2 formas
    //res.json(resultados)
    res.send(JSON.stringify(resultados));
});

app.post("/api/v1/products/",(req,res)=>{
    let product= req.body;
    products.push(product); 
    res.json(products);
    //res.send(JSON.stringify(products))
})

//PUT para actualizar una entidad (en una base de datos es un "item" q tiene conjunto de propiedades y valores)OJO hay q enviarlas todas, 
//hasta las q no se van a actualizar
app.put("/api/v1/products/:id/", (req,res)=>{
    //recibo el producto actualizado
    const pdtoActualizado=req.body;
    //extraigo id del pdto
    const id=req.params.id;
    //encuentro el indice de mi id con el metodo findIndex (en la func flecha el 1er id es el del pdto y el 2do es el parametro URL que paso arriba desp d put)
    //NO uso === xq mi id es un numero pero el q m pasa el cliente es una cadena de caracteres 
    const indice=products.findIndex(pdto=>pdto.id==id);
    if(indice>=0){
        //cojo arreglo products con indice y le asigno el nuevo
        products[indice]=pdtoActualizado;
    }else{
        res.status(404).send();
    }
    res.send(JSON.stringify(products))
    //res.json(products);
}
)


app.listen(PORT,()=>{
    console.log(`Escuchando en http:localhost:${PORT}`)
})