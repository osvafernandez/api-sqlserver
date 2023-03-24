import { getInst } from "../controllers/sequelize.controller.js";
import { Router } from "express";

const router = Router();

router.get("/seq/inst", getInst);

export default router;
