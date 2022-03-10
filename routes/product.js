
import { Router } from "express";
import { check } from "../middlewares/check";
const router = Router();

const product = [
        {id: 1, name: "Product A"},
        {id: 2, name: "Product B"},
    ];




router.get('/product', check, (req, res) => {
    
    res.json(product);
});

router.get('/product/:id', check, (req, res) => {
    
    res.json(product.find(item => item.id === +req.params.id));
});

router.post('/product', check, (req, res) => {
    console.log(req.body); // req về 1 cái object đã thêm vào ở body
   
    product.push(req.body);// push vào product là cái mảng cũ 
    res.json(product);
});

router.delete('/product/:id', check, (req, res) => {
    res.json(product.filter(item => item.id !== +req.params.id));
});


export default router;