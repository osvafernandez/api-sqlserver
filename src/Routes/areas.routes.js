import { Router } from "express";
import { getAreas } from "../controllers/areas.controllers.js";

const router = Router();

router.get("/areas", getAreas);

export default router;
