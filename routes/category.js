import { Router } from "express";
import { create, list, read, remove, update } from "../controller/category";
import { check, isAdmin, isAuth, requireSignin } from "../middlewares/check";
import { userById } from "../controller/user";
const router = Router();

router.post("/category/:userId", requireSignin,isAuth, isAdmin, create);
router.get("/category/:id",check, read);
router.get("/category", check, list);
router.delete("/category/:userId/:id",requireSignin,isAuth, isAdmin, remove);
router.put('/category/:userId/:id',requireSignin,isAuth, isAdmin, update)

router.param('userId', userById)
export default router;