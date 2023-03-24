import { Router } from "express";
import { home, tableData } from "../controllers/home.controllers.js";

const router = Router();

router.get("/", home);

router.get("/dataTable", tableData);

export default router;
