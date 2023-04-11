import { Router } from "express";
import {
  home,
  tableData,
  administracion,
  login,
  checkLoginCredentials,
} from "../controllers/views.controllers.js";

const router = Router();

router.get("/SisMed", home);

router.get("/SisMed/dataTable", tableData);

router.get("/SisMed/administracion", administracion);

router.get("/SisMed/login", login);

router.post("/SisMed/login", checkLoginCredentials);

export default router;
