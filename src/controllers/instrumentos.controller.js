import Joi from "joi";
import { getConnection, sql } from "../Database/connection.js";

export const getInstrument = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("Select * FROM Instrumento");
    res.send(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewInstrument = async (req, res) => {
  const schema = Joi.object({
    noSerieInventario: Joi.string().alphanum().min(1).required(),
    idTipoInstrumento: Joi.number().required(),
    idArea: Joi.number().required(),
    rangoMax: Joi.string().max(50),
    rangoMin: Joi.string().max(50),
    marcaModelo: Joi.string().max(50).required(),
    claseoVd: Joi.string().max(50).required(),
    fechaCalibracion: Joi.date().required(),
    noCert: Joi.string().max(50).required(),
    estado: Joi.string().max(50).required(),
    ubicacion: Joi.string().max(50).required(),
    valorMaxTrabajo: Joi.string().max(50),
    conexionProceso: Joi.string().max(50),
    fechaProximaCalibracion: Joi.date(),
    diametroCaja: Joi.string().max(50),
    longitudInmercion: Joi.string().max(50),
    Comentarios: Joi.string(),
    usuario: Joi.string().max(50).required(),
    baja: Joi.bool().required(),
  });

  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).json({
      message: result.error.details[0].message,
    });
  }

  const {
    noSerieInventario,
    idTipoInstrumento,
    idArea,
    rangoMax,
    rangoMin,
    marcaModelo,
    claseoVd,
    fechaCalibracion,
    noCert,
    estado,
    ubicacion,
    valorMaxTrabajo,
    conexionProceso,
    fechaProximaCalibracion,
    diametroCaja,
    longitudInmercion,
    Comentarios,
    usuario,
    baja,
  } = result.value;

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("noSerieInventario", sql.VarChar, noSerieInventario)
      .input("idTipoInstrumento", sql.Int, idTipoInstrumento)
      .input("idArea", sql.Int, idArea)
      .input("rangoMax", sql.VarChar, rangoMax)
      .input("rangoMin", sql.VarChar, rangoMin)
      .input("marcaModelo", sql.VarChar, marcaModelo)
      .input("claseoVd", sql.VarChar, claseoVd)
      .input("fechaCalibracion", sql.Date, fechaCalibracion)
      .input("noCert", sql.VarChar, noCert)
      .input("estado", sql.VarChar, estado)
      .input("ubicacion", sql.VarChar, ubicacion)
      .input("valorMaxTrabajo", sql.VarChar, valorMaxTrabajo)
      .input("conexionProceso", sql.VarChar, conexionProceso)
      .input("fechaProximaCalibracion", sql.Date, fechaProximaCalibracion)
      .input("diametroCaja", sql.VarChar, diametroCaja)
      .input("longitudInmercion", sql.VarChar, longitudInmercion)
      .input("Comentarios", sql.VarChar, Comentarios)
      .input("usuario", sql.VarChar, usuario)
      .input("baja", sql.Bit, baja)
      .query(
        "INSERT INTO Instrumento (noSerieInventario,idTipoInstrumento,idArea,rangoMax,rangoMin,marcaModelo,claseoVd,fechaCalibracion,noCert,estado,ubicacion,valorMaxTrabajo,conexionProceso,fechaProximaCalibracion,diametroCaja,longitudInmercion,Comentarios,usuario,baja) Values (@noSerieInventario,@idTipoInstrumento,@idArea,@rangoMax,@rangoMin,@marcaModelo,@claseoVd,@fechaCalibracion,@noCert,@estado,@ubicacion,@valorMaxTrabajo,@conexionProceso,@fechaProximaCalibracion,@diametroCaja,@longitudInmercion,@Comentarios,@usuario,@baja)"
      );
    res.send(await pool.request().query("Select * FROM Instrumento").recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getInstrumentById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.VarChar, id)
      .query("Select * From Instrumento Where noSerieInventario=@id");
    res.send(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteInstrumentById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.VarChar, id)
      .query("DELETE FROM Instrumento WHERE noSerieInventario=@id");
    res.send(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
