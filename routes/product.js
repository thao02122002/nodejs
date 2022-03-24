
import { Router } from "express";
import { create, list, read, remove, update } from "../controller/product";
import { check } from "../middlewares/check";


const router = Router();




//resfull API
router.get('/products',check, list);

router.get('/products/:id', check, read);

router.post('/products', check, create);

router.delete('/products/:id', check, remove);
router.put('/products/:id', check, update );

export default router;