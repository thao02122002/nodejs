import { Router } from "express";
import { check, isAdmin, isAuth, requireSignin } from "../middlewares/check";
import { create, list, update, read, remove } from "../controller/new";
import { userById } from "../controller/user";
const router = Router();

//resfull API
router.get('/new', check, list);
router.get('/new/:id', check, read);
router.post('/new/:userId',requireSignin, isAuth,isAdmin, create);
router.put('/new/:userId/:id',requireSignin, isAuth,isAdmin, update);
router.delete('/new/:userId/:id', requireSignin, isAuth,isAdmin, remove);
router.param('userId', userById)
export default router;