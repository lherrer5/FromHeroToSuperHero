//Importo express
const express= require('express');

const PORT= 3000;
const app= express();

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

app.get("/api/v1/products/:id",(req, res)=>{
    const productID= req.params;
    console.log(req.params);
    res.json({})
})


app.listen(PORT,()=>{
    console.log(`Escuchando en http:localhost:${PORT}`)
})