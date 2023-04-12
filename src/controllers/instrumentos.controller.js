import { getConnection, sql } from "../Database/connection.js";
import { schemaInstrument } from "../Database/instrumentSchema.js";
import { queries } from "../Database/queries.js";

export const getInstrument = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(`${queries.getInstrumentsNAreas}`);
    const records = result.recordset;
    res.json(records);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// post: /api/instrument
export const createNewInstrument = async (req, res) => {
  const result = schemaInstrument.validate(req.body);
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
      .query(`${queries.insertNewInstrumnet}`);
    res.send(
      await (
        await pool.request().query(`${queries.getInstrumentsNAreas}`)
      ).recordset
    );
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
      .query(`${queries.getById}`);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getAmountInstrumnet = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(`${queries.getAmountInstrumnet}`);
    res.send(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getInstrumentByArea = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.VarChar, id)
      .query(
        "SELECT noSerieInventario,denominacion,nombre as Area,rangoMax,rangoMin,marcaModelo,claseoVd,fechaCalibracion,noCert,estado,ubicacion,Instrumento.valorMaxTrabajo,conexionProceso,fechaProximaCalibracion,diametroCaja,longitudInmercion,Comentarios,usuario,baja FROM (([dbo].[Instrumento] Inner Join [dbo].[areas] on Instrumento.idArea = areas.idArea) Inner Join [dbo].[TipoInstrumento] on Instrumento.idTipoInstrumento = TipoInstrumento.idTipoInstrumento) where Instrumento.idArea = @id"
      );
    console.log(result);
    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//delete /instrument/id
export const deleteInstrumentById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.VarChar, id)
      .query(`${queries.deleteById}`);
    res.send(result.rowsAffected);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//put(update)
export const updateInstrumnet = async (req, res) => {
  const result = schemaInstrument.validate(req.body);
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
  } = req.body;

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
      .query(`${queries.updateInstrument}`);
    res.json(`actualizado ${noSerieInventario}`);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
