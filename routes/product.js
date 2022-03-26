
import { Router } from "express";
import { create, list, read, remove, update } from "../controller/product";
import { check, isAdmin, isAuth, requireSignin } from "../middlewares/check";
import {userById} from '../controller/user'


const router = Router();




//resfull API
router.get('/products',check, list);

router.get('/products/:id', check, read);

router.post('/products/:userId', requireSignin ,isAuth, isAdmin, create);

router.delete('/products/:id', check, remove);
router.put('/products/:id', check, update );
router.param('userId', userById);

export default router;