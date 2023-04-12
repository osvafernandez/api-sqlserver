import { Router } from "express";
import {
  getInstrument,
  createNewInstrument,
  getInstrumentById,
  deleteInstrumentById,
  getAmountInstrumnet,
  updateInstrumnet,
  getInstrumentByArea,
} from "../controllers/instrumentos.controller.js";
import { api_key } from "../config.js";

const router = Router();
//const api_key = process.env.api_key;

router.get(`/api/${api_key}/instruments`, getInstrument);

router.get(`/api/${api_key}/instrument/:id`, getInstrumentById);

router.get(`/api/${api_key}/instrument/area/:idArea`, getInstrumentByArea);

router.post(`/api/${api_key}/instrument`, createNewInstrument);

router.post("/api/instruments", getAmountInstrumnet);

router.delete("/api/instrument/:id", deleteInstrumentById);

router.put("/api/instrument/", updateInstrumnet);

export default router;
