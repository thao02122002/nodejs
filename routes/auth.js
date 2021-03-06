import { Router } from "express";
import { ListUser, ReadUser, signIn, signUp, UpdateUser } from "../controller/auth";
import { check, isAdmin, isAuth, requireSignin } from "../middlewares/check";
import {userById} from '../controller/user'

const router = Router();

router.post('/signup', check, signUp);
router.post('/signin', signIn);
router.get('/user', check, ListUser);
router.get('/user/:id', check, ReadUser);
router.patch('/user/:id',UpdateUser);
router.param('userId', userById);

export default router;