import Joi from "joi";
import { getConnection, sql } from "../Database/connection.js";
import { queries } from "../Database/queries.js";

export const getAreas = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query("SELECT * FROM areas");
  res.json(result.recordset);
};

export const getInstrumentxArea = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.VarChar, id)
      .query(`${queries.getAreasById}`);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
