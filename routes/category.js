import { Router } from "express";
import { create, list, read, remove, update } from "../controller/category";
import { check } from "../middlewares/check";

const router = Router();

router.post("/category", check, create);
router.get("/category/:id",check, read);
router.get("/category", check, list);
router.delete("/category/:id", check, remove);
router.patch('/category/:id', check, update)
export default router;