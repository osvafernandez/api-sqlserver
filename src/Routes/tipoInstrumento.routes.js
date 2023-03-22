import { Router } from "express";
import { getTipoInstrument } from "../controllers/tipoInstrumento.controllers.js";

const router = Router();

router.get("/tipoInstrumento", getTipoInstrument);

router.post("/instrument");

router.get("/instrument/:id");

router.delete("/instrument/:id");

router.put("/instruments");

export default router;
