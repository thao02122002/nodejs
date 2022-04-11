import { Router } from "express";
import { CREATE } from "../controller/comment";
const router = Router()

router.post('/comment', CREATE)
export default router