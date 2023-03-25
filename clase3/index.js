//Importo express
const express= require('express');

const PORT= 3000;
const app= express();

const products= [];

app.get("/",(req, res)=>{
    res.send("Mi app en express")
})

app.get("/api/v1/products",(req, res)=>{
    res.json(products)
})

app.listen(PORT,()=>{
    console.log(`Escuchando en http:localhost:${PORT}`)
})