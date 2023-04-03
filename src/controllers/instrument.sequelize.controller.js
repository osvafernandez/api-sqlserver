import sequelize, { instrumentModel } from "../Database/sequelize.js";
import { sequelizeQueries } from "../Database/sequelize.queries.js";

export const getInstrumentSequelize = async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  const result = await instrumentModel.findAll(sequelizeQueries.selectAll);
  res.send(result);
};
