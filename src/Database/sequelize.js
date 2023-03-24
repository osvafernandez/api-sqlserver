import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.SERVER,
    dialect: "mssql",
    dialectOptions: {
      options: {
        encrypt: false,
      },
    },
  }
);

export const instrumentModel = sequelize.define("Instrumento", {
  noSerieInventario: { type: DataTypes.STRING, primaryKey: true },
  idTipoInstrumento: { type: DataTypes.INTEGER, primaryKey: true },
  idArea: DataTypes.INTEGER,
});

export default sequelize;
