import { Router } from "express";
import {
  defaultRoute,
  home,
  listadoInstrumentosxAreas,
  administracion,
  login,
  checkLoginCredentials,
} from "../controllers/views.controllers.js";

const router = Router();

router.get("/", defaultRoute);

router.get("/sismed", home);

router.get("/sismed/listadoInstrumentosxAreas", listadoInstrumentosxAreas);

router.get("/sismed/administracion", administracion);

router.get("/sismed/login", login);

router.post("/sismed/login", checkLoginCredentials);

export default router;
