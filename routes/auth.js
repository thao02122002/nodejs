import { Router } from "express";
import { signIn, signUp } from "../controller/user";
import { check } from "../middlewares/check";

const router = Router();

router.post('/signup', check, signUp);
router.post('/signin', check, signIn);

export default router;