import sequelize, { instrumentModel } from "../Database/sequelize.js";

export const getInst = async (req, res) => {
  /*   try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  } */
  instrumentModel
    .findAll({
      attributes: [
        "noSerieInventario",
        "idTipoInstrumento",
        "idArea",
        "rangoMax",
        "rangoMin",
        "marcaModelo",
        "claseoVd",
        "fechaCalibracion",
        "noCert",
        "estado",
        "ubicacion",
        "valorMaxTrabajo",
        "conexionProceso",
        "fechaProximaCalibracion",
        "diametroCaja",
        "longitudInmercion",
        "Comentarios",
        "usuario",
        "baja",
      ],
    })
    .then((result) => {
      res.send(result);
    })
    .catch((error) => console.log(error));
};
