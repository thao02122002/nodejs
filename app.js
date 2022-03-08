

const express = require('express');
const app = express();

//middleware

const check = (req, res, next) => {
    const status = true;
    if(status) {
        console.log("Hello");
        next();
    }else {
        console.log("aaaaaaaaaaaaa");
    }
}

// app.use(check)
// app.use((req, res ) => {
//     console.log("Bước 2");

// }
    
// )


app.get('/product', check, (req, res) => {
    const product = [
        {id: 1, name: "Product A"},
        {id: 2, name: "Product B"},
    ];
    res.json(product);
})







// const server = http.createServer((req, res) => {
//     console.log('url', req.url);
//     if(req.url === "/"){
//         res.setHeader('Content-Type', "text/html");
//         res.write("<html><body><h1>Home Page</h1></body></html>");
//         res.end();
//     }else if(req.url === "/product") {
//         const products = [
//             {id: 1, name: "Product A"},
//             {id: 2, name: "Product B"},
//         ]
//         res.end(JSON.stringify(products));
//     }else{
//         console.log("I Don't anderstand");
//     }
// });
 const PORT = 3001;
 app.listen(PORT, () => {
     console.log("Server is running port", PORT);
 })