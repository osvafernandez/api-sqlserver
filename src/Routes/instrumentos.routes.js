import { Router } from "express";
import {
  getInstrument,
  createNewInstrument,
  getInstrumentById,
  deleteInstrumentById,
} from "../controllers/instrumentos.controller.js";

const router = Router();

router.get("/instruments", getInstrument);

router.post("/instrument", createNewInstrument);

router.get("/instrument/:id", getInstrumentById);

router.delete("/instrument/:id", deleteInstrumentById);

router.put("/instruments");

export default router;
