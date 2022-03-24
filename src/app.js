

// const express = require('express');
import express from "express";
import cors from 'cors';// cấp quyền truy cập
import morgan from "morgan";
import mongoose from "mongoose";

import productRouter from '../routes/product';
import categoryRouter from '../routes/category';
// import newRouter from '../routes/new';
import userRouter from '../routes/auth';
//morgan dùng để thông báo khi thực hiện get hay post ... dùng npm i morgan


const app = express();
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());// phải đứng trc để chuyển kiểu 
// app.use(productRouter);
// app.use(newRouter);
app.use("/api", userRouter);
app.use("/api", productRouter)
app.use("/api", categoryRouter)

// connect databse
mongoose.connect('mongodb://localhost:27017/web16309')
.then(() => console.log("Kết nối db thành công"))
.catch((error) => console.log(error));


//connection
 const PORT = 8000;
 app.listen(PORT, () => {
     console.log("Server is running port", PORT);
 })