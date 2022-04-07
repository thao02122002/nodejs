import { Router } from "express";
import { ListUser, signIn, signUp } from "../controller/auth";
import { check } from "../middlewares/check";

const router = Router();

router.post('/signup', check, signUp);
router.post('/signin', check, signIn);
router.get('/users', check, ListUser);

export default router;