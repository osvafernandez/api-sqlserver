import express from "express";
import config from "./config.js";
import instrumentRoutes from "./Routes/instrumentos.routes.js";
import areasRoutes from "./Routes/areas.routes.js";
import tipoInstrumentoRoutes from "./Routes/tipoInstrumento.routes.js";

const app = express();

//settings
app.set("port", config.port);

//midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(instrumentRoutes);
app.use(areasRoutes);
app.use(tipoInstrumentoRoutes);

export default app;
