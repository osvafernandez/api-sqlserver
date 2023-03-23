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

router.get("/instruments", getInstrument);

router.get("/instrument/:id", getInstrumentById);

router.post("/instrument", createNewInstrument);

router.post("/instruments", getAmountInstrumnet);

router.delete("/instrument/:id", deleteInstrumentById);

router.put("/instrument/", updateInstrumnet);

export default router;
