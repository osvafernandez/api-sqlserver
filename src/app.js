import express from "express";
import config from "./config.js";
import instrumentRoutes from "./Routes/instrumentos.routes.js";
import areasRoutes from "./Routes/areas.routes.js";
import tipoInstrumentoRoutes from "./Routes/tipoInstrumento.routes.js";
import viewsRoutes from "./Routes/views.routes.js";
import sequelizeRoute from "./Routes/sequelize.routes.js";

const app = express();

//settings
app.set("port", config.port);

//midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use("/public", express.static("public"));

//routes
app.use(instrumentRoutes);
app.use(areasRoutes);
app.use(tipoInstrumentoRoutes);
app.use(sequelizeRoute);
app.use(viewsRoutes);

export default app;
