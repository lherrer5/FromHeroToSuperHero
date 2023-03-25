const http = require("http");

//pongo el host en variable para hacer pruebas y luego poderlo cambiar a mi dominip
const HOST = "localhost";
const PORT = 3000;

const writeHTMLResponse = (res, htmlCode) => {
//.setHeader para establecer el valor de una cabecera (header) en una respuesta HTTP
res.setHeader("Content-Type", "text/html");
//.writeHead para establecer el estado (status) y las cabeceras (headers) de una respuesta HTTP
res.writeHead(200);
//.end para finalizar la respuesta y enviar cualquier contenido que se haya escrito en la respuesta, aca <p> Esta es otra ruta </p>"
res.end(htmlCode);
};

const writeJSONResponse = (res, json) => {
res.setHeader("Content-Type", "application/json");
res.writeHead(200);
//.stringify para convertir un objeto JavaScript en una cadena de caracteres JSON.
res.end(JSON.stringify(json));
};

const products = [
{
    name: "Reloj",
    price: 100,
    quantity: 2,
},
{
    name: "Correa",
    price: 100,
    quantity: 3,
},
{
    name: "Sombrero",
    price: 1000,
    quantity: 3,
},
];

const server = http.createServer(async (req, res) => {
const url = req.url;
let body = "";
console.log("URL es ", url);

await req.on("data", (chunk) => {
    body += chunk;
});

if (url === "/other") {
    writeHTMLResponse(res, "<p> Esta es otra ruta </p>");
} else if ("/api/v1/products/") {
    const method = req.method;
    console.log("Method", method);
    if (method === "GET") {
    // Do something
    writeJSONResponse(res, products);
    } else if (method === "POST") {
    const product = JSON.parse(body);
    products.push(product);
    writeJSONResponse(res, products);
    } else if (method == "DELETE") {
    const productInformation = JSON.parse(body);
    const productName = productInformation.name;
    if (productName) {
        const indexOfProduct = products.findIndex(
        (product) => product.name === productName
        );
        console.log("indexOfProduct", indexOfProduct);
        if (indexOfProduct !== -1) {
        products.splice(indexOfProduct, 1);
        }
    }
    writeJSONResponse(res, products);
    }
} else {
    writeHTMLResponse(res, "<p> codigo HTML </p>");
}
});

server.listen(PORT, HOST, () => {
console.log(`Servidor corriendo en +
    http://${HOST}:${PORT}`);
});