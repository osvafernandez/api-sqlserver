import { Router } from "express";
import {
  getAreas,
  getInstrumentxArea,
} from "../controllers/areas.controllers.js";
import { api_key } from "../config.js";

const router = Router();

router.get(`/api/${api_key}/areas`, getAreas);

router.get("/api/areas/:id", getInstrumentxArea);

export default router;
