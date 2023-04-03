import { getInst } from "../controllers/sequelize.controller.js";
import { Router } from "express";

const router = Router();

router.get("/seq", getInst);

export default router;
