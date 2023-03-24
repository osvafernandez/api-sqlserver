import sequelize, { instrumentModel } from "../Database/sequelize.js";

export const getInst = async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  instrumentModel
    .findAll({ attributes: ["noSerieInventario", "idTipoInstrumento"] })
    .then((instruments) => {
      res.send(instruments);
    })
    .catch((error) => console.log(error));
};
