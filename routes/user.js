import { Router } from "express";
import { signIn, signUp } from "../controller/user";
import { check } from "../middlewares/check";

const router = Router();

router.post('/user', check, signUp);
router.get('/user/:id', check, signIn);
export default router;