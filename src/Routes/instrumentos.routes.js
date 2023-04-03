import { Router } from "express";
import {
  getInstrument,
  createNewInstrument,
  getInstrumentById,
  deleteInstrumentById,
  getAmountInstrumnet,
  updateInstrumnet,
} from "../controllers/instrumentos.controller.js";

const router = Router();

router.get("/api/instruments", getInstrument);

router.get("/api/instrument/:id", getInstrumentById);

router.post("/api/instrument", createNewInstrument);

router.post("/api/instruments", getAmountInstrumnet);

router.delete("/api/instrument/:id", deleteInstrumentById);

router.put("/api/instrument/", updateInstrumnet);

export default router;
