

// const express = require('express');
import express from "express";
import cors from 'cors';// cấp quyền truy cập
import mongoose from "mongoose";
import productRouter from '../routes/product';
//morgan dùng để thông báo khi thực hiện get hay post ... dùng npm i morgan
import morgan from "morgan";

const app = express();
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());// phải đứng trc để chuyển kiểu 
app.use(productRouter);

// connect databse
mongoose.connect('mongodb://localhost:27017/web16309')
.then(() => console.log("Kết nối db thành công"))
.catch((error) => console.log(error));


//connection
 const PORT = 3001;
 app.listen(PORT, () => {
     console.log("Server is running port", PORT);
 })