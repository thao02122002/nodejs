import { Router } from "express";
import { create, list, read, readCate, remove, update } from "../controller/category";
import { userById } from "../controller/user";
const router = Router();

router.post("/category", create);
// router.get("/category/:id", read);
router.get("/category/:id", readCate);
router.get("/category", list);
router.delete("/category/:id", remove);
router.patch('/category/:id', update)

router.param('userId', userById)
export default router;