import app from "../app.js";
import { api_key } from "../config.js";

export const defaultRoute = (req, res) => {
  res.redirect("/sismed");
  console.log(`GET / redirect to /sismed`);
};

export const home = (req, res) => {
  res.render("home");
  console.log(`GET /sismed`);
};

export const listadoInstrumentosxAreas = async (req, res) => {
  const areas = await fetch(
    `http://localhost:${app.get("port")}/api/${api_key}/areas`
  )
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
    });
  res.render("listadoInstrumentos", { areas: areas });
};

export const administracion = async (req, res) => {
  res.render("admin");
};

export const login = async (req, res) => {
  res.render("login");
  console.log(`GET /sismed/login`);
};

export const checkLoginCredentials = (req, res) => {
  console.log(req.body.username, req.body.password);
  res.redirect("login");
};
