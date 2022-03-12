
import { Router } from "express";
import { create, list, read, remove, update } from "../controller/product";
import { check } from "../middlewares/check";


const router = Router();




//resfull API
router.get('/product',check, list);

router.get('/product/:id', check, read);

router.post('/product', check, create);

router.delete('/product/:id', check, remove);
router.patch('/product/:id', check, update );

export default router;