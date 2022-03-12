

// const express = require('express');
import express from "express";
import cors from 'cors';// cấp quyền truy cập
import productRouter from '../routes/product';
//morgan dùng để thông báo khi thực hiện get hay post ... dùng npm i morgan
import morgan from "morgan";

const app = express();
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());// phải đứng trc để chuyển kiểu 
app.use(productRouter);



//middleware

// const check = (req, res, next) => {
//     const status = true;
//     if(status) {
//         console.log("Hello");
//         next();
//     }else {
//         console.log("aaaaaaaaaaaaa");
//     }
// }




// app.get('/product', check, (req, res) => {
//     const product = [
//         {id: 1, name: "Product A"},
//         {id: 2, name: "Product B"},
//     ];
//     res.json(product);
// })







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