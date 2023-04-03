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

export const instrumentModel = sequelize.define(
  "Instrumento",
  {
    noSerieInventario: { type: DataTypes.STRING, primaryKey: true },
    idTipoInstrumento: { type: DataTypes.INTEGER, primaryKey: true },
    idArea: DataTypes.INTEGER,
    rangoMax: DataTypes.STRING,
    rangoMin: DataTypes.STRING,
    marcaModelo: DataTypes.STRING,
    claseoVd: DataTypes.STRING,
    fechaCalibracion: DataTypes.DATE,
    noCert: DataTypes.STRING,
    estado: DataTypes.STRING,
    ubicacion: DataTypes.STRING,
    valorMaxTrabajo: DataTypes.STRING,
    conexionProceso: DataTypes.STRING,
    fechaProximaCalibracion: DataTypes.DATE,
    diametroCaja: DataTypes.STRING,
    longitudInmercion: DataTypes.STRING,
    Comentarios: DataTypes.STRING,
    usuario: DataTypes.STRING,
    baja: DataTypes.BOOLEAN,
  },
  {
    freezeTableName: true,
  }
);

export default sequelize;
