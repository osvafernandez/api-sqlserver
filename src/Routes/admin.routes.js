import { Router } from "express";
import { credentials } from "../controllers/admin.controllers";

const router = Router();

router.get("/api/admin/credentials", credentials);
