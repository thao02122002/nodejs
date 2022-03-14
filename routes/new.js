import { Router } from "express";
import { check } from "../middlewares/check";
import { create, list, update, read, remove } from "../controller/new";

const router = Router();

//resfull API
router.get('/new', check, list);
router.get('/new/:id', check, read);
router.post('/new', check, create);
router.patch('/new/:id', check, update);
router.delete('/new/:id', check, remove);
export default router;