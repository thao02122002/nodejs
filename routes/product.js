
import { Router } from "express";
import { create, list, read, remove, update, search, sort } from "../controller/product";
import { check, isAdmin, isAuth, requireSignin } from "../middlewares/check";
import {userById} from '../controller/user'


const router = Router();




//resfull API
router.get('/products',check, list);

router.get('/products/:id', check, read);

router.post('/products/:userId', requireSignin ,isAuth, isAdmin, create);

router.delete('/products/:userId/:id',requireSignin ,isAuth, isAdmin, remove);
router.put('/products/:userId/:id',requireSignin ,isAuth, isAdmin, update );
router.post('/search',check, search)
router.get('/filter', sort)
router.param('userId', userById);

export default router;